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
import { CcTransactionDetailController } from "../ccTransactionDetail.controller";
import { CcTransactionDetailService } from "../ccTransactionDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  ccId: 42,
  date: new Date(),
  time: new Date(),
  reportDate: new Date(),
  paymentId: 42,
  transactionType: "exampleTransactionType",
  itemName: "exampleItemName",
  itemQty: 42.42,
  itemPriceEach: 42.42,
  itemGlString: "exampleItemGlString",
  id: "exampleId",
};
const CREATE_RESULT = {
  ccId: 42,
  date: new Date(),
  time: new Date(),
  reportDate: new Date(),
  paymentId: 42,
  transactionType: "exampleTransactionType",
  itemName: "exampleItemName",
  itemQty: 42.42,
  itemPriceEach: 42.42,
  itemGlString: "exampleItemGlString",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    ccId: 42,
    date: new Date(),
    time: new Date(),
    reportDate: new Date(),
    paymentId: 42,
    transactionType: "exampleTransactionType",
    itemName: "exampleItemName",
    itemQty: 42.42,
    itemPriceEach: 42.42,
    itemGlString: "exampleItemGlString",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  ccId: 42,
  date: new Date(),
  time: new Date(),
  reportDate: new Date(),
  paymentId: 42,
  transactionType: "exampleTransactionType",
  itemName: "exampleItemName",
  itemQty: 42.42,
  itemPriceEach: 42.42,
  itemGlString: "exampleItemGlString",
  id: "exampleId",
};

const service = {
  createCcTransactionDetail() {
    return CREATE_RESULT;
  },
  ccTransactionDetails: () => FIND_MANY_RESULT,
  ccTransactionDetail: ({ where }: { where: { id: string } }) => {
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

describe("CcTransactionDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CcTransactionDetailService,
          useValue: service,
        },
      ],
      controllers: [CcTransactionDetailController],
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

  test("POST /ccTransactionDetails", async () => {
    await request(app.getHttpServer())
      .post("/ccTransactionDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        reportDate: CREATE_RESULT.reportDate.toISOString(),
      });
  });

  test("GET /ccTransactionDetails", async () => {
    await request(app.getHttpServer())
      .get("/ccTransactionDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
          time: FIND_MANY_RESULT[0].time.toISOString(),
          reportDate: FIND_MANY_RESULT[0].reportDate.toISOString(),
        },
      ]);
  });

  test("GET /ccTransactionDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ccTransactionDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ccTransactionDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ccTransactionDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
        time: FIND_ONE_RESULT.time.toISOString(),
        reportDate: FIND_ONE_RESULT.reportDate.toISOString(),
      });
  });

  test("POST /ccTransactionDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ccTransactionDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        reportDate: CREATE_RESULT.reportDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/ccTransactionDetails")
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
