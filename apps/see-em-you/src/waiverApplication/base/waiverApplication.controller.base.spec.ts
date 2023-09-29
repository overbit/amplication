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
import { WaiverApplicationController } from "../waiverApplication.controller";
import { WaiverApplicationService } from "../waiverApplication.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  createDate: new Date(),
  datafileId: 42,
  id: 42,
  orgId: 42,
  updateDate: new Date(),
};
const CREATE_RESULT = {
  applicationId: 42,
  createDate: new Date(),
  datafileId: 42,
  id: 42,
  orgId: 42,
  updateDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    createDate: new Date(),
    datafileId: 42,
    id: 42,
    orgId: 42,
    updateDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  createDate: new Date(),
  datafileId: 42,
  id: 42,
  orgId: 42,
  updateDate: new Date(),
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

describe("WaiverApplication", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WaiverApplicationService,
          useValue: service,
        },
      ],
      controllers: [WaiverApplicationController],
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

  test("POST /waiverApplications", async () => {
    await request(app.getHttpServer())
      .post("/waiverApplications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createDate: CREATE_RESULT.createDate.toISOString(),
        updateDate: CREATE_RESULT.updateDate.toISOString(),
      });
  });

  test("GET /waiverApplications", async () => {
    await request(app.getHttpServer())
      .get("/waiverApplications")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createDate: FIND_MANY_RESULT[0].createDate.toISOString(),
          updateDate: FIND_MANY_RESULT[0].updateDate.toISOString(),
        },
      ]);
  });

  test("GET /waiverApplications/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/waiverApplications"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /waiverApplications/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/waiverApplications"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createDate: FIND_ONE_RESULT.createDate.toISOString(),
        updateDate: FIND_ONE_RESULT.updateDate.toISOString(),
      });
  });

  test("POST /waiverApplications existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/waiverApplications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createDate: CREATE_RESULT.createDate.toISOString(),
        updateDate: CREATE_RESULT.updateDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/waiverApplications")
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
