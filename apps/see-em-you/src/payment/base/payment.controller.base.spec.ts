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
import { PaymentController } from "../payment.controller";
import { PaymentService } from "../payment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  paymentId: 42,
  paymentType: 42,
  paymentAmount: 42.424242424,
  paymentIntentDate: new Date(),
  lastModTime: new Date(),
  lastModUserId: 42,
  id: 42,
};
const CREATE_RESULT = {
  paymentId: 42,
  paymentType: 42,
  paymentAmount: 42.424242424,
  paymentIntentDate: new Date(),
  lastModTime: new Date(),
  lastModUserId: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    paymentId: 42,
    paymentType: 42,
    paymentAmount: 42.424242424,
    paymentIntentDate: new Date(),
    lastModTime: new Date(),
    lastModUserId: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  paymentId: 42,
  paymentType: 42,
  paymentAmount: 42.424242424,
  paymentIntentDate: new Date(),
  lastModTime: new Date(),
  lastModUserId: 42,
  id: 42,
};

const service = {
  createPayment() {
    return CREATE_RESULT;
  },
  payments: () => FIND_MANY_RESULT,
  payment: ({ where }: { where: { id: string } }) => {
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

describe("Payment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PaymentService,
          useValue: service,
        },
      ],
      controllers: [PaymentController],
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

  test("POST /payments", async () => {
    await request(app.getHttpServer())
      .post("/payments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        paymentIntentDate: CREATE_RESULT.paymentIntentDate.toISOString(),
        lastModTime: CREATE_RESULT.lastModTime.toISOString(),
      });
  });

  test("GET /payments", async () => {
    await request(app.getHttpServer())
      .get("/payments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          paymentIntentDate:
            FIND_MANY_RESULT[0].paymentIntentDate.toISOString(),
          lastModTime: FIND_MANY_RESULT[0].lastModTime.toISOString(),
        },
      ]);
  });

  test("GET /payments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/payments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /payments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/payments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        paymentIntentDate: FIND_ONE_RESULT.paymentIntentDate.toISOString(),
        lastModTime: FIND_ONE_RESULT.lastModTime.toISOString(),
      });
  });

  test("POST /payments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/payments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        paymentIntentDate: CREATE_RESULT.paymentIntentDate.toISOString(),
        lastModTime: CREATE_RESULT.lastModTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/payments")
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
