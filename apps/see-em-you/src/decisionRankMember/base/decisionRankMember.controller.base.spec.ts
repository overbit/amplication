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
import { DecisionRankMemberController } from "../decisionRankMember.controller";
import { DecisionRankMemberService } from "../decisionRankMember.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  departmentId: 42,
  periodId: 42,
  decision: "exampleDecision",
  applicationId: 42,
  drank: 42,
  id: "exampleId",
};
const CREATE_RESULT = {
  departmentId: 42,
  periodId: 42,
  decision: "exampleDecision",
  applicationId: 42,
  drank: 42,
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    departmentId: 42,
    periodId: 42,
    decision: "exampleDecision",
    applicationId: 42,
    drank: 42,
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  departmentId: 42,
  periodId: 42,
  decision: "exampleDecision",
  applicationId: 42,
  drank: 42,
  id: "exampleId",
};

const service = {
  createDecisionRankMember() {
    return CREATE_RESULT;
  },
  decisionRankMembers: () => FIND_MANY_RESULT,
  decisionRankMember: ({ where }: { where: { id: string } }) => {
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

describe("DecisionRankMember", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DecisionRankMemberService,
          useValue: service,
        },
      ],
      controllers: [DecisionRankMemberController],
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

  test("POST /decisionRankMembers", async () => {
    await request(app.getHttpServer())
      .post("/decisionRankMembers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /decisionRankMembers", async () => {
    await request(app.getHttpServer())
      .get("/decisionRankMembers")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /decisionRankMembers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/decisionRankMembers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /decisionRankMembers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/decisionRankMembers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /decisionRankMembers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/decisionRankMembers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/decisionRankMembers")
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
