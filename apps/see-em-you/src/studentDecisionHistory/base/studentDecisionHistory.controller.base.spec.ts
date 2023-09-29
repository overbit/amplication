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
import { StudentDecisionHistoryController } from "../studentDecisionHistory.controller";
import { StudentDecisionHistoryService } from "../studentDecisionHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  decision: "exampleDecision",
  deferralSemester: "exampleDeferralSemester",
  deferralYear: "exampleDeferralYear",
  id: 42,
  insertDate: new Date(),
  programId: 42,
};
const CREATE_RESULT = {
  decision: "exampleDecision",
  deferralSemester: "exampleDeferralSemester",
  deferralYear: "exampleDeferralYear",
  id: 42,
  insertDate: new Date(),
  programId: 42,
};
const FIND_MANY_RESULT = [
  {
    decision: "exampleDecision",
    deferralSemester: "exampleDeferralSemester",
    deferralYear: "exampleDeferralYear",
    id: 42,
    insertDate: new Date(),
    programId: 42,
  },
];
const FIND_ONE_RESULT = {
  decision: "exampleDecision",
  deferralSemester: "exampleDeferralSemester",
  deferralYear: "exampleDeferralYear",
  id: 42,
  insertDate: new Date(),
  programId: 42,
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

describe("StudentDecisionHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentDecisionHistoryService,
          useValue: service,
        },
      ],
      controllers: [StudentDecisionHistoryController],
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

  test("POST /studentDecisionHistories", async () => {
    await request(app.getHttpServer())
      .post("/studentDecisionHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        insertDate: CREATE_RESULT.insertDate.toISOString(),
      });
  });

  test("GET /studentDecisionHistories", async () => {
    await request(app.getHttpServer())
      .get("/studentDecisionHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          insertDate: FIND_MANY_RESULT[0].insertDate.toISOString(),
        },
      ]);
  });

  test("GET /studentDecisionHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDecisionHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentDecisionHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDecisionHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        insertDate: FIND_ONE_RESULT.insertDate.toISOString(),
      });
  });

  test("POST /studentDecisionHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentDecisionHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        insertDate: CREATE_RESULT.insertDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/studentDecisionHistories")
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
