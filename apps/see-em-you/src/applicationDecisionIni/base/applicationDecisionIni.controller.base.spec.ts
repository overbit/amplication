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
import { ApplicationDecisionIniController } from "../applicationDecisionIni.controller";
import { ApplicationDecisionIniService } from "../applicationDecisionIni.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  admissionProgramId: 42,
  admissionStatus: 42,
  applicationId: 42,
  choice: 42,
  comments: "exampleComments",
  id: "exampleId",
  scholarshipAmt: 42.424242424,
  scholarshipComments: "exampleScholarshipComments",
  timestamp: new Date(),
};
const CREATE_RESULT = {
  admissionProgramId: 42,
  admissionStatus: 42,
  applicationId: 42,
  choice: 42,
  comments: "exampleComments",
  id: "exampleId",
  scholarshipAmt: 42.424242424,
  scholarshipComments: "exampleScholarshipComments",
  timestamp: new Date(),
};
const FIND_MANY_RESULT = [
  {
    admissionProgramId: 42,
    admissionStatus: 42,
    applicationId: 42,
    choice: 42,
    comments: "exampleComments",
    id: "exampleId",
    scholarshipAmt: 42.424242424,
    scholarshipComments: "exampleScholarshipComments",
    timestamp: new Date(),
  },
];
const FIND_ONE_RESULT = {
  admissionProgramId: 42,
  admissionStatus: 42,
  applicationId: 42,
  choice: 42,
  comments: "exampleComments",
  id: "exampleId",
  scholarshipAmt: 42.424242424,
  scholarshipComments: "exampleScholarshipComments",
  timestamp: new Date(),
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

describe("ApplicationDecisionIni", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationDecisionIniService,
          useValue: service,
        },
      ],
      controllers: [ApplicationDecisionIniController],
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

  test("POST /applicationDecisionInis", async () => {
    await request(app.getHttpServer())
      .post("/applicationDecisionInis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        timestamp: CREATE_RESULT.timestamp.toISOString(),
      });
  });

  test("GET /applicationDecisionInis", async () => {
    await request(app.getHttpServer())
      .get("/applicationDecisionInis")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
        },
      ]);
  });

  test("GET /applicationDecisionInis/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationDecisionInis"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationDecisionInis/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationDecisionInis"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
      });
  });

  test("POST /applicationDecisionInis existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationDecisionInis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        timestamp: CREATE_RESULT.timestamp.toISOString(),
      })
      .then(function () {
        agent
          .post("/applicationDecisionInis")
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
