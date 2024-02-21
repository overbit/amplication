import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CcAuthNotificationController } from "../ccAuthNotification.controller";
import { CcAuthNotificationService } from "../ccAuthNotification.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  paymentId: 42,
  authNotificationTime: new Date(),
  id: "exampleId",
};
const CREATE_RESULT = {
  paymentId: 42,
  authNotificationTime: new Date(),
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    paymentId: 42,
    authNotificationTime: new Date(),
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  paymentId: 42,
  authNotificationTime: new Date(),
  id: "exampleId",
};

const service = {
  createCcAuthNotification() {
    return CREATE_RESULT;
  },
  ccAuthNotifications: () => FIND_MANY_RESULT,
  ccAuthNotification: ({ where }: { where: { id: string } }) => {
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

describe("CcAuthNotification", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CcAuthNotificationService,
          useValue: service,
        },
      ],
      controllers: [CcAuthNotificationController],
      imports: [ACLModule],
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

  test("POST /ccAuthNotifications", async () => {
    await request(app.getHttpServer())
      .post("/ccAuthNotifications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        authNotificationTime: CREATE_RESULT.authNotificationTime.toISOString(),
      });
  });

  test("GET /ccAuthNotifications", async () => {
    await request(app.getHttpServer())
      .get("/ccAuthNotifications")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          authNotificationTime:
            FIND_MANY_RESULT[0].authNotificationTime.toISOString(),
        },
      ]);
  });

  test("GET /ccAuthNotifications/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ccAuthNotifications"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ccAuthNotifications/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ccAuthNotifications"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        authNotificationTime:
          FIND_ONE_RESULT.authNotificationTime.toISOString(),
      });
  });

  test("POST /ccAuthNotifications existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ccAuthNotifications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        authNotificationTime: CREATE_RESULT.authNotificationTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/ccAuthNotifications")
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
