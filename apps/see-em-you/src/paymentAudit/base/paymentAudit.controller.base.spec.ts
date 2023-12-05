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
import { PaymentAuditController } from "../paymentAudit.controller";
import { PaymentAuditService } from "../paymentAudit.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  id: 42,
  lastModTime: new Date(),
  lastModUserId: 42,
  paymentAmount: 42.424242424,
  paymentId: 42,
  paymentIntentDate: new Date(),
  paymentType: 42,
  timeDeleted: new Date(),
};
const CREATE_RESULT = {
  applicationId: 42,
  id: 42,
  lastModTime: new Date(),
  lastModUserId: 42,
  paymentAmount: 42.424242424,
  paymentId: 42,
  paymentIntentDate: new Date(),
  paymentType: 42,
  timeDeleted: new Date(),
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    id: 42,
    lastModTime: new Date(),
    lastModUserId: 42,
    paymentAmount: 42.424242424,
    paymentId: 42,
    paymentIntentDate: new Date(),
    paymentType: 42,
    timeDeleted: new Date(),
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  id: 42,
  lastModTime: new Date(),
  lastModUserId: 42,
  paymentAmount: 42.424242424,
  paymentId: 42,
  paymentIntentDate: new Date(),
  paymentType: 42,
  timeDeleted: new Date(),
};

const service = {
  createPaymentAudit() {
    return CREATE_RESULT;
  },
  paymentAudits: () => FIND_MANY_RESULT,
  paymentAudit: ({ where }: { where: { id: string } }) => {
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

describe("PaymentAudit", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PaymentAuditService,
          useValue: service,
        },
      ],
      controllers: [PaymentAuditController],
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

  test("POST /paymentAudits", async () => {
    await request(app.getHttpServer())
      .post("/paymentAudits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastModTime: CREATE_RESULT.lastModTime.toISOString(),
        paymentIntentDate: CREATE_RESULT.paymentIntentDate.toISOString(),
        timeDeleted: CREATE_RESULT.timeDeleted.toISOString(),
      });
  });

  test("GET /paymentAudits", async () => {
    await request(app.getHttpServer())
      .get("/paymentAudits")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          lastModTime: FIND_MANY_RESULT[0].lastModTime.toISOString(),
          paymentIntentDate:
            FIND_MANY_RESULT[0].paymentIntentDate.toISOString(),
          timeDeleted: FIND_MANY_RESULT[0].timeDeleted.toISOString(),
        },
      ]);
  });

  test("GET /paymentAudits/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentAudits"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /paymentAudits/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentAudits"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        lastModTime: FIND_ONE_RESULT.lastModTime.toISOString(),
        paymentIntentDate: FIND_ONE_RESULT.paymentIntentDate.toISOString(),
        timeDeleted: FIND_ONE_RESULT.timeDeleted.toISOString(),
      });
  });

  test("POST /paymentAudits existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/paymentAudits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastModTime: CREATE_RESULT.lastModTime.toISOString(),
        paymentIntentDate: CREATE_RESULT.paymentIntentDate.toISOString(),
        timeDeleted: CREATE_RESULT.timeDeleted.toISOString(),
      })
      .then(function () {
        agent
          .post("/paymentAudits")
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
