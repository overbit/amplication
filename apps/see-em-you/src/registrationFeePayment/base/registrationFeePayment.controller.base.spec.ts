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
import { RegistrationFeePaymentController } from "../registrationFeePayment.controller";
import { RegistrationFeePaymentService } from "../registrationFeePayment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  departmentId: 42,
  id: 42,
  lastModTime: new Date(),
  lastModUserId: 42,
  paymentAmount: 42.424242424,
  paymentIntentDate: new Date(),
  paymentType: 42,
};
const CREATE_RESULT = {
  departmentId: 42,
  id: 42,
  lastModTime: new Date(),
  lastModUserId: 42,
  paymentAmount: 42.424242424,
  paymentIntentDate: new Date(),
  paymentType: 42,
};
const FIND_MANY_RESULT = [
  {
    departmentId: 42,
    id: 42,
    lastModTime: new Date(),
    lastModUserId: 42,
    paymentAmount: 42.424242424,
    paymentIntentDate: new Date(),
    paymentType: 42,
  },
];
const FIND_ONE_RESULT = {
  departmentId: 42,
  id: 42,
  lastModTime: new Date(),
  lastModUserId: 42,
  paymentAmount: 42.424242424,
  paymentIntentDate: new Date(),
  paymentType: 42,
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

describe("RegistrationFeePayment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RegistrationFeePaymentService,
          useValue: service,
        },
      ],
      controllers: [RegistrationFeePaymentController],
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

  test("POST /registrationFeePayments", async () => {
    await request(app.getHttpServer())
      .post("/registrationFeePayments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastModTime: CREATE_RESULT.lastModTime.toISOString(),
        paymentIntentDate: CREATE_RESULT.paymentIntentDate.toISOString(),
      });
  });

  test("GET /registrationFeePayments", async () => {
    await request(app.getHttpServer())
      .get("/registrationFeePayments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          lastModTime: FIND_MANY_RESULT[0].lastModTime.toISOString(),
          paymentIntentDate:
            FIND_MANY_RESULT[0].paymentIntentDate.toISOString(),
        },
      ]);
  });

  test("GET /registrationFeePayments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/registrationFeePayments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /registrationFeePayments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/registrationFeePayments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        lastModTime: FIND_ONE_RESULT.lastModTime.toISOString(),
        paymentIntentDate: FIND_ONE_RESULT.paymentIntentDate.toISOString(),
      });
  });

  test("POST /registrationFeePayments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/registrationFeePayments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastModTime: CREATE_RESULT.lastModTime.toISOString(),
        paymentIntentDate: CREATE_RESULT.paymentIntentDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/registrationFeePayments")
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
