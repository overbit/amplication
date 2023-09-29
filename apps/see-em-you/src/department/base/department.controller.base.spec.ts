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
import { DepartmentController } from "../department.controller";
import { DepartmentService } from "../department.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allowRequestAdvisors: 42,
  ccEmail: "exampleCcEmail",
  drank: 42,
  enableFinal: "exampleEnableFinal",
  enableRound1: "exampleEnableRound1",
  enableRound2: "exampleEnableRound2",
  enableRound3: "exampleEnableRound3",
  enableRound4: "exampleEnableRound4",
  id: 42,
  name: "exampleName",
  oraclestring: "exampleOraclestring",
  parentSchoolId: 42,
  registrationoraclestring: "exampleRegistrationoraclestring",
  semiblindReview: "exampleSemiblindReview",
};
const CREATE_RESULT = {
  allowRequestAdvisors: 42,
  ccEmail: "exampleCcEmail",
  drank: 42,
  enableFinal: "exampleEnableFinal",
  enableRound1: "exampleEnableRound1",
  enableRound2: "exampleEnableRound2",
  enableRound3: "exampleEnableRound3",
  enableRound4: "exampleEnableRound4",
  id: 42,
  name: "exampleName",
  oraclestring: "exampleOraclestring",
  parentSchoolId: 42,
  registrationoraclestring: "exampleRegistrationoraclestring",
  semiblindReview: "exampleSemiblindReview",
};
const FIND_MANY_RESULT = [
  {
    allowRequestAdvisors: 42,
    ccEmail: "exampleCcEmail",
    drank: 42,
    enableFinal: "exampleEnableFinal",
    enableRound1: "exampleEnableRound1",
    enableRound2: "exampleEnableRound2",
    enableRound3: "exampleEnableRound3",
    enableRound4: "exampleEnableRound4",
    id: 42,
    name: "exampleName",
    oraclestring: "exampleOraclestring",
    parentSchoolId: 42,
    registrationoraclestring: "exampleRegistrationoraclestring",
    semiblindReview: "exampleSemiblindReview",
  },
];
const FIND_ONE_RESULT = {
  allowRequestAdvisors: 42,
  ccEmail: "exampleCcEmail",
  drank: 42,
  enableFinal: "exampleEnableFinal",
  enableRound1: "exampleEnableRound1",
  enableRound2: "exampleEnableRound2",
  enableRound3: "exampleEnableRound3",
  enableRound4: "exampleEnableRound4",
  id: 42,
  name: "exampleName",
  oraclestring: "exampleOraclestring",
  parentSchoolId: 42,
  registrationoraclestring: "exampleRegistrationoraclestring",
  semiblindReview: "exampleSemiblindReview",
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

describe("Department", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DepartmentService,
          useValue: service,
        },
      ],
      controllers: [DepartmentController],
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

  test("POST /departments", async () => {
    await request(app.getHttpServer())
      .post("/departments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /departments", async () => {
    await request(app.getHttpServer())
      .get("/departments")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /departments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/departments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /departments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/departments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /departments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/departments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/departments")
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
