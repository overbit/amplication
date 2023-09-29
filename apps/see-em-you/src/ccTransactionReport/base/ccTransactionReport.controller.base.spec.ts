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
import { CcTransactionReportController } from "../ccTransactionReport.controller";
import { CcTransactionReportService } from "../ccTransactionReport.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  lastModDate: new Date(),
  size: 42,
  statusTime: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  lastModDate: new Date(),
  size: 42,
  statusTime: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    lastModDate: new Date(),
    size: 42,
    statusTime: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  lastModDate: new Date(),
  size: 42,
  statusTime: new Date(),
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

describe("CcTransactionReport", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CcTransactionReportService,
          useValue: service,
        },
      ],
      controllers: [CcTransactionReportController],
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

  test("POST /ccTransactionReports", async () => {
    await request(app.getHttpServer())
      .post("/ccTransactionReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastModDate: CREATE_RESULT.lastModDate.toISOString(),
        statusTime: CREATE_RESULT.statusTime.toISOString(),
      });
  });

  test("GET /ccTransactionReports", async () => {
    await request(app.getHttpServer())
      .get("/ccTransactionReports")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          lastModDate: FIND_MANY_RESULT[0].lastModDate.toISOString(),
          statusTime: FIND_MANY_RESULT[0].statusTime.toISOString(),
        },
      ]);
  });

  test("GET /ccTransactionReports/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ccTransactionReports"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ccTransactionReports/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ccTransactionReports"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        lastModDate: FIND_ONE_RESULT.lastModDate.toISOString(),
        statusTime: FIND_ONE_RESULT.statusTime.toISOString(),
      });
  });

  test("POST /ccTransactionReports existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ccTransactionReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastModDate: CREATE_RESULT.lastModDate.toISOString(),
        statusTime: CREATE_RESULT.statusTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/ccTransactionReports")
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
