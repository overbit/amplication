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
import { CcPaymentStatusController } from "../ccPaymentStatus.controller";
import { CcPaymentStatusService } from "../ccPaymentStatus.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  authTotal: 42.42,
  creditTotal: 42.42,
  id: 42,
  settleTotal: 42.42,
  statusDate: new Date(),
};
const CREATE_RESULT = {
  authTotal: 42.42,
  creditTotal: 42.42,
  id: 42,
  settleTotal: 42.42,
  statusDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    authTotal: 42.42,
    creditTotal: 42.42,
    id: 42,
    settleTotal: 42.42,
    statusDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  authTotal: 42.42,
  creditTotal: 42.42,
  id: 42,
  settleTotal: 42.42,
  statusDate: new Date(),
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

describe("CcPaymentStatus", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CcPaymentStatusService,
          useValue: service,
        },
      ],
      controllers: [CcPaymentStatusController],
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

  test("POST /ccPaymentStatuses", async () => {
    await request(app.getHttpServer())
      .post("/ccPaymentStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        statusDate: CREATE_RESULT.statusDate.toISOString(),
      });
  });

  test("GET /ccPaymentStatuses", async () => {
    await request(app.getHttpServer())
      .get("/ccPaymentStatuses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          statusDate: FIND_MANY_RESULT[0].statusDate.toISOString(),
        },
      ]);
  });

  test("GET /ccPaymentStatuses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ccPaymentStatuses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ccPaymentStatuses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ccPaymentStatuses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        statusDate: FIND_ONE_RESULT.statusDate.toISOString(),
      });
  });

  test("POST /ccPaymentStatuses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ccPaymentStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        statusDate: CREATE_RESULT.statusDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/ccPaymentStatuses")
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
