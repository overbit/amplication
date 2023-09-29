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
import { DepartmentReplyperiodController } from "../departmentReplyperiod.controller";
import { DepartmentReplyperiodService } from "../departmentReplyperiod.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  deptId: 42,
  end: new Date(),
  id: 42,
  start: new Date(),
};
const CREATE_RESULT = {
  deptId: 42,
  end: new Date(),
  id: 42,
  start: new Date(),
};
const FIND_MANY_RESULT = [
  {
    deptId: 42,
    end: new Date(),
    id: 42,
    start: new Date(),
  },
];
const FIND_ONE_RESULT = {
  deptId: 42,
  end: new Date(),
  id: 42,
  start: new Date(),
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

describe("DepartmentReplyperiod", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DepartmentReplyperiodService,
          useValue: service,
        },
      ],
      controllers: [DepartmentReplyperiodController],
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

  test("POST /departmentReplyperiods", async () => {
    await request(app.getHttpServer())
      .post("/departmentReplyperiods")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        end: CREATE_RESULT.end.toISOString(),
        start: CREATE_RESULT.start.toISOString(),
      });
  });

  test("GET /departmentReplyperiods", async () => {
    await request(app.getHttpServer())
      .get("/departmentReplyperiods")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          end: FIND_MANY_RESULT[0].end.toISOString(),
          start: FIND_MANY_RESULT[0].start.toISOString(),
        },
      ]);
  });

  test("GET /departmentReplyperiods/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/departmentReplyperiods"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /departmentReplyperiods/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/departmentReplyperiods"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        end: FIND_ONE_RESULT.end.toISOString(),
        start: FIND_ONE_RESULT.start.toISOString(),
      });
  });

  test("POST /departmentReplyperiods existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/departmentReplyperiods")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        end: CREATE_RESULT.end.toISOString(),
        start: CREATE_RESULT.start.toISOString(),
      })
      .then(function () {
        agent
          .post("/departmentReplyperiods")
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
