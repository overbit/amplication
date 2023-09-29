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
import { ApplicationDecisionController } from "../applicationDecision.controller";
import { ApplicationDecisionService } from "../applicationDecision.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  admissionProgramId: 42,
  admissionStatus: "exampleAdmissionStatus",
  applicationId: 42,
  attendOtherUniversity: 42,
  comments: "exampleComments",
  id: "exampleId",
  otherChoiceLocation: "exampleOtherChoiceLocation",
  periodId: 42,
  programId: 42,
  visitCampus: 42,
  visitComments: 42,
  visitHelpful: 42,
};
const CREATE_RESULT = {
  admissionProgramId: 42,
  admissionStatus: "exampleAdmissionStatus",
  applicationId: 42,
  attendOtherUniversity: 42,
  comments: "exampleComments",
  id: "exampleId",
  otherChoiceLocation: "exampleOtherChoiceLocation",
  periodId: 42,
  programId: 42,
  visitCampus: 42,
  visitComments: 42,
  visitHelpful: 42,
};
const FIND_MANY_RESULT = [
  {
    admissionProgramId: 42,
    admissionStatus: "exampleAdmissionStatus",
    applicationId: 42,
    attendOtherUniversity: 42,
    comments: "exampleComments",
    id: "exampleId",
    otherChoiceLocation: "exampleOtherChoiceLocation",
    periodId: 42,
    programId: 42,
    visitCampus: 42,
    visitComments: 42,
    visitHelpful: 42,
  },
];
const FIND_ONE_RESULT = {
  admissionProgramId: 42,
  admissionStatus: "exampleAdmissionStatus",
  applicationId: 42,
  attendOtherUniversity: 42,
  comments: "exampleComments",
  id: "exampleId",
  otherChoiceLocation: "exampleOtherChoiceLocation",
  periodId: 42,
  programId: 42,
  visitCampus: 42,
  visitComments: 42,
  visitHelpful: 42,
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

describe("ApplicationDecision", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationDecisionService,
          useValue: service,
        },
      ],
      controllers: [ApplicationDecisionController],
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

  test("POST /applicationDecisions", async () => {
    await request(app.getHttpServer())
      .post("/applicationDecisions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /applicationDecisions", async () => {
    await request(app.getHttpServer())
      .get("/applicationDecisions")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /applicationDecisions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationDecisions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationDecisions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationDecisions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /applicationDecisions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationDecisions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/applicationDecisions")
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
