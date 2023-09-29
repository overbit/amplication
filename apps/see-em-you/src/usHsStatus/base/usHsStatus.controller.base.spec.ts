import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { UsHsStatusController } from "../usHsStatus.controller";
import { UsHsStatusService } from "../usHsStatus.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  anyUsHs: 42,
  appId: 42,
  firstGen: 42,
  firstGenGrad: 42,
  id: 42,
  pell: 42,
  permZipGrad: 42,
  ugFedWorkStudy: 42,
  usHSGrad: 42,
};
const CREATE_RESULT = {
  anyUsHs: 42,
  appId: 42,
  firstGen: 42,
  firstGenGrad: 42,
  id: 42,
  pell: 42,
  permZipGrad: 42,
  ugFedWorkStudy: 42,
  usHSGrad: 42,
};
const FIND_MANY_RESULT = [
  {
    anyUsHs: 42,
    appId: 42,
    firstGen: 42,
    firstGenGrad: 42,
    id: 42,
    pell: 42,
    permZipGrad: 42,
    ugFedWorkStudy: 42,
    usHSGrad: 42,
  },
];
const FIND_ONE_RESULT = {
  anyUsHs: 42,
  appId: 42,
  firstGen: 42,
  firstGenGrad: 42,
  id: 42,
  pell: 42,
  permZipGrad: 42,
  ugFedWorkStudy: 42,
  usHSGrad: 42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("UsHsStatus", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UsHsStatusService,
          useValue: service,
        },
      ],
      controllers: [UsHsStatusController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /usHsStatuses", async () => {
    await request(app.getHttpServer())
      .post("/usHsStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /usHsStatuses", async () => {
    await request(app.getHttpServer())
      .get("/usHsStatuses")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /usHsStatuses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/usHsStatuses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /usHsStatuses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/usHsStatuses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /usHsStatuses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/usHsStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/usHsStatuses")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
