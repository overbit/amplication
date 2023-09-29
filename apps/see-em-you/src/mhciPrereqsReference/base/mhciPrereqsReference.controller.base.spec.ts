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
import { MhciPrereqsReferenceController } from "../mhciPrereqsReference.controller";
import { MhciPrereqsReferenceService } from "../mhciPrereqsReference.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  anovaComment: "exampleAnovaComment",
  applicationId: 42,
  content: "exampleContent",
  datafileId: 42,
  id: 42,
  lastReminderSent: new Date(),
  periodId: 42,
  programId: 42,
  refUserId: 42,
  regressionComment: "exampleRegressionComment",
  reminderSentCount: 42,
  submitted: "true",
};
const CREATE_RESULT = {
  anovaComment: "exampleAnovaComment",
  applicationId: 42,
  content: "exampleContent",
  datafileId: 42,
  id: 42,
  lastReminderSent: new Date(),
  periodId: 42,
  programId: 42,
  refUserId: 42,
  regressionComment: "exampleRegressionComment",
  reminderSentCount: 42,
  submitted: "true",
};
const FIND_MANY_RESULT = [
  {
    anovaComment: "exampleAnovaComment",
    applicationId: 42,
    content: "exampleContent",
    datafileId: 42,
    id: 42,
    lastReminderSent: new Date(),
    periodId: 42,
    programId: 42,
    refUserId: 42,
    regressionComment: "exampleRegressionComment",
    reminderSentCount: 42,
    submitted: "true",
  },
];
const FIND_ONE_RESULT = {
  anovaComment: "exampleAnovaComment",
  applicationId: 42,
  content: "exampleContent",
  datafileId: 42,
  id: 42,
  lastReminderSent: new Date(),
  periodId: 42,
  programId: 42,
  refUserId: 42,
  regressionComment: "exampleRegressionComment",
  reminderSentCount: 42,
  submitted: "true",
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

describe("MhciPrereqsReference", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MhciPrereqsReferenceService,
          useValue: service,
        },
      ],
      controllers: [MhciPrereqsReferenceController],
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

  test("POST /mhciPrereqsReferences", async () => {
    await request(app.getHttpServer())
      .post("/mhciPrereqsReferences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastReminderSent: CREATE_RESULT.lastReminderSent.toISOString(),
      });
  });

  test("GET /mhciPrereqsReferences", async () => {
    await request(app.getHttpServer())
      .get("/mhciPrereqsReferences")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          lastReminderSent: FIND_MANY_RESULT[0].lastReminderSent.toISOString(),
        },
      ]);
  });

  test("GET /mhciPrereqsReferences/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciPrereqsReferences"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mhciPrereqsReferences/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciPrereqsReferences"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        lastReminderSent: FIND_ONE_RESULT.lastReminderSent.toISOString(),
      });
  });

  test("POST /mhciPrereqsReferences existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mhciPrereqsReferences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastReminderSent: CREATE_RESULT.lastReminderSent.toISOString(),
      })
      .then(function () {
        agent
          .post("/mhciPrereqsReferences")
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
