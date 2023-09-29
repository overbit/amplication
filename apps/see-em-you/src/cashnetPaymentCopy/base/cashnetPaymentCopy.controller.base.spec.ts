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
import { CashnetPaymentCopyController } from "../cashnetPaymentCopy.controller";
import { CashnetPaymentCopyService } from "../cashnetPaymentCopy.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  appId: 42,
  applicantEmail: "exampleApplicantEmail",
  applicantName: "exampleApplicantName",
  id: 42,
  merchant: 42,
  status: "exampleStatus",
  transactionId: 42,
  transactionTime: new Date(),
  transactionType: "exampleTransactionType",
};
const CREATE_RESULT = {
  amount: 42.42,
  appId: 42,
  applicantEmail: "exampleApplicantEmail",
  applicantName: "exampleApplicantName",
  id: 42,
  merchant: 42,
  status: "exampleStatus",
  transactionId: 42,
  transactionTime: new Date(),
  transactionType: "exampleTransactionType",
};
const FIND_MANY_RESULT = [
  {
    amount: 42.42,
    appId: 42,
    applicantEmail: "exampleApplicantEmail",
    applicantName: "exampleApplicantName",
    id: 42,
    merchant: 42,
    status: "exampleStatus",
    transactionId: 42,
    transactionTime: new Date(),
    transactionType: "exampleTransactionType",
  },
];
const FIND_ONE_RESULT = {
  amount: 42.42,
  appId: 42,
  applicantEmail: "exampleApplicantEmail",
  applicantName: "exampleApplicantName",
  id: 42,
  merchant: 42,
  status: "exampleStatus",
  transactionId: 42,
  transactionTime: new Date(),
  transactionType: "exampleTransactionType",
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

describe("CashnetPaymentCopy", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CashnetPaymentCopyService,
          useValue: service,
        },
      ],
      controllers: [CashnetPaymentCopyController],
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

  test("POST /cashnetPaymentCopies", async () => {
    await request(app.getHttpServer())
      .post("/cashnetPaymentCopies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        transactionTime: CREATE_RESULT.transactionTime.toISOString(),
      });
  });

  test("GET /cashnetPaymentCopies", async () => {
    await request(app.getHttpServer())
      .get("/cashnetPaymentCopies")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          transactionTime: FIND_MANY_RESULT[0].transactionTime.toISOString(),
        },
      ]);
  });

  test("GET /cashnetPaymentCopies/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cashnetPaymentCopies"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cashnetPaymentCopies/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cashnetPaymentCopies"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        transactionTime: FIND_ONE_RESULT.transactionTime.toISOString(),
      });
  });

  test("POST /cashnetPaymentCopies existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cashnetPaymentCopies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        transactionTime: CREATE_RESULT.transactionTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/cashnetPaymentCopies")
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
