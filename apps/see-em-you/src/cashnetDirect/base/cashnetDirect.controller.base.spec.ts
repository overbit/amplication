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
import { CashnetDirectController } from "../cashnetDirect.controller";
import { CashnetDirectService } from "../cashnetDirect.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  appEmail: "exampleAppEmail",
  appId: 42,
  batch: 42,
  created: new Date(),
  custCode: 42,
  dept: "exampleDept",
  id: 42,
  name: "exampleName",
  paymentType: "examplePaymentType",
  station: 42,
  status: "exampleStatus",
  transType: "exampleTransType",
  txNumber: 42,
};
const CREATE_RESULT = {
  amount: 42.42,
  appEmail: "exampleAppEmail",
  appId: 42,
  batch: 42,
  created: new Date(),
  custCode: 42,
  dept: "exampleDept",
  id: 42,
  name: "exampleName",
  paymentType: "examplePaymentType",
  station: 42,
  status: "exampleStatus",
  transType: "exampleTransType",
  txNumber: 42,
};
const FIND_MANY_RESULT = [
  {
    amount: 42.42,
    appEmail: "exampleAppEmail",
    appId: 42,
    batch: 42,
    created: new Date(),
    custCode: 42,
    dept: "exampleDept",
    id: 42,
    name: "exampleName",
    paymentType: "examplePaymentType",
    station: 42,
    status: "exampleStatus",
    transType: "exampleTransType",
    txNumber: 42,
  },
];
const FIND_ONE_RESULT = {
  amount: 42.42,
  appEmail: "exampleAppEmail",
  appId: 42,
  batch: 42,
  created: new Date(),
  custCode: 42,
  dept: "exampleDept",
  id: 42,
  name: "exampleName",
  paymentType: "examplePaymentType",
  station: 42,
  status: "exampleStatus",
  transType: "exampleTransType",
  txNumber: 42,
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

describe("CashnetDirect", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CashnetDirectService,
          useValue: service,
        },
      ],
      controllers: [CashnetDirectController],
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

  test("POST /cashnetDirects", async () => {
    await request(app.getHttpServer())
      .post("/cashnetDirects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
      });
  });

  test("GET /cashnetDirects", async () => {
    await request(app.getHttpServer())
      .get("/cashnetDirects")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
        },
      ]);
  });

  test("GET /cashnetDirects/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cashnetDirects"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cashnetDirects/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cashnetDirects"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
      });
  });

  test("POST /cashnetDirects existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cashnetDirects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
      })
      .then(function () {
        agent
          .post("/cashnetDirects")
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
