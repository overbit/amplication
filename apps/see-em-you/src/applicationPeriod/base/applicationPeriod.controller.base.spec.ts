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
import { ApplicationPeriodController } from "../applicationPeriod.controller";
import { ApplicationPeriodService } from "../applicationPeriod.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  departmentId: 42,
  startDate: new Date(),
  endDate: new Date(),
  id: 42,
};
const CREATE_RESULT = {
  departmentId: 42,
  startDate: new Date(),
  endDate: new Date(),
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    departmentId: 42,
    startDate: new Date(),
    endDate: new Date(),
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  departmentId: 42,
  startDate: new Date(),
  endDate: new Date(),
  id: 42,
};

const service = {
  createApplicationPeriod() {
    return CREATE_RESULT;
  },
  applicationPeriods: () => FIND_MANY_RESULT,
  applicationPeriod: ({ where }: { where: { id: string } }) => {
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

describe("ApplicationPeriod", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationPeriodService,
          useValue: service,
        },
      ],
      controllers: [ApplicationPeriodController],
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

  test("POST /applicationPeriods", async () => {
    await request(app.getHttpServer())
      .post("/applicationPeriods")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        startDate: CREATE_RESULT.startDate.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
      });
  });

  test("GET /applicationPeriods", async () => {
    await request(app.getHttpServer())
      .get("/applicationPeriods")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
        },
      ]);
  });

  test("GET /applicationPeriods/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationPeriods"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationPeriods/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationPeriods"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
      });
  });

  test("POST /applicationPeriods existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationPeriods")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        startDate: CREATE_RESULT.startDate.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/applicationPeriods")
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
