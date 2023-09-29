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
import { CcTransactionSummaryController } from "../ccTransactionSummary.controller";
import { CcTransactionSummaryService } from "../ccTransactionSummary.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  authAmount: 42.42,
  authCode: "exampleAuthCode",
  authMessage: "exampleAuthMessage",
  ccId: 42,
  creditAmount: 42.42,
  date: new Date(),
  id: "exampleId",
  paymentId: 42,
  reportDate: new Date(),
  settleAmount: 42.42,
  settleCode: "exampleSettleCode",
  settleMessage: "exampleSettleMessage",
  time: new Date(),
};
const CREATE_RESULT = {
  authAmount: 42.42,
  authCode: "exampleAuthCode",
  authMessage: "exampleAuthMessage",
  ccId: 42,
  creditAmount: 42.42,
  date: new Date(),
  id: "exampleId",
  paymentId: 42,
  reportDate: new Date(),
  settleAmount: 42.42,
  settleCode: "exampleSettleCode",
  settleMessage: "exampleSettleMessage",
  time: new Date(),
};
const FIND_MANY_RESULT = [
  {
    authAmount: 42.42,
    authCode: "exampleAuthCode",
    authMessage: "exampleAuthMessage",
    ccId: 42,
    creditAmount: 42.42,
    date: new Date(),
    id: "exampleId",
    paymentId: 42,
    reportDate: new Date(),
    settleAmount: 42.42,
    settleCode: "exampleSettleCode",
    settleMessage: "exampleSettleMessage",
    time: new Date(),
  },
];
const FIND_ONE_RESULT = {
  authAmount: 42.42,
  authCode: "exampleAuthCode",
  authMessage: "exampleAuthMessage",
  ccId: 42,
  creditAmount: 42.42,
  date: new Date(),
  id: "exampleId",
  paymentId: 42,
  reportDate: new Date(),
  settleAmount: 42.42,
  settleCode: "exampleSettleCode",
  settleMessage: "exampleSettleMessage",
  time: new Date(),
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

describe("CcTransactionSummary", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CcTransactionSummaryService,
          useValue: service,
        },
      ],
      controllers: [CcTransactionSummaryController],
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

  test("POST /ccTransactionSummaries", async () => {
    await request(app.getHttpServer())
      .post("/ccTransactionSummaries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
        reportDate: CREATE_RESULT.reportDate.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
      });
  });

  test("GET /ccTransactionSummaries", async () => {
    await request(app.getHttpServer())
      .get("/ccTransactionSummaries")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
          reportDate: FIND_MANY_RESULT[0].reportDate.toISOString(),
          time: FIND_MANY_RESULT[0].time.toISOString(),
        },
      ]);
  });

  test("GET /ccTransactionSummaries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ccTransactionSummaries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ccTransactionSummaries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ccTransactionSummaries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
        reportDate: FIND_ONE_RESULT.reportDate.toISOString(),
        time: FIND_ONE_RESULT.time.toISOString(),
      });
  });

  test("POST /ccTransactionSummaries existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ccTransactionSummaries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
        reportDate: CREATE_RESULT.reportDate.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
      })
      .then(function () {
        agent
          .post("/ccTransactionSummaries")
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
