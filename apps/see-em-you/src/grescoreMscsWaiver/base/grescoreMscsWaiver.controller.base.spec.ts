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
import { GrescoreMscsWaiverController } from "../grescoreMscsWaiver.controller";
import { GrescoreMscsWaiverService } from "../grescoreMscsWaiver.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  waiverAgree: 42,
  waiverTime: new Date(),
};
const CREATE_RESULT = {
  id: 42,
  waiverAgree: 42,
  waiverTime: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    waiverAgree: 42,
    waiverTime: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  waiverAgree: 42,
  waiverTime: new Date(),
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

describe("GrescoreMscsWaiver", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GrescoreMscsWaiverService,
          useValue: service,
        },
      ],
      controllers: [GrescoreMscsWaiverController],
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

  test("POST /grescoreMscsWaivers", async () => {
    await request(app.getHttpServer())
      .post("/grescoreMscsWaivers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        waiverTime: CREATE_RESULT.waiverTime.toISOString(),
      });
  });

  test("GET /grescoreMscsWaivers", async () => {
    await request(app.getHttpServer())
      .get("/grescoreMscsWaivers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          waiverTime: FIND_MANY_RESULT[0].waiverTime.toISOString(),
        },
      ]);
  });

  test("GET /grescoreMscsWaivers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/grescoreMscsWaivers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /grescoreMscsWaivers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/grescoreMscsWaivers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        waiverTime: FIND_ONE_RESULT.waiverTime.toISOString(),
      });
  });

  test("POST /grescoreMscsWaivers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/grescoreMscsWaivers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        waiverTime: CREATE_RESULT.waiverTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/grescoreMscsWaivers")
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
