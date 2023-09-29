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
import { LangProfRecommendController } from "../langProfRecommend.controller";
import { LangProfRecommendService } from "../langProfRecommend.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  content: "exampleContent",
  datafileId: 42,
  id: 42,
  langProfRecId: 42,
  languageSpecialization: "exampleLanguageSpecialization",
  lastReminderSent: new Date(),
  recUserId: 42,
  reminderSentCount: 42,
  submitted: "true",
};
const CREATE_RESULT = {
  applicationId: 42,
  content: "exampleContent",
  datafileId: 42,
  id: 42,
  langProfRecId: 42,
  languageSpecialization: "exampleLanguageSpecialization",
  lastReminderSent: new Date(),
  recUserId: 42,
  reminderSentCount: 42,
  submitted: "true",
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    content: "exampleContent",
    datafileId: 42,
    id: 42,
    langProfRecId: 42,
    languageSpecialization: "exampleLanguageSpecialization",
    lastReminderSent: new Date(),
    recUserId: 42,
    reminderSentCount: 42,
    submitted: "true",
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  content: "exampleContent",
  datafileId: 42,
  id: 42,
  langProfRecId: 42,
  languageSpecialization: "exampleLanguageSpecialization",
  lastReminderSent: new Date(),
  recUserId: 42,
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

describe("LangProfRecommend", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LangProfRecommendService,
          useValue: service,
        },
      ],
      controllers: [LangProfRecommendController],
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

  test("POST /langProfRecommends", async () => {
    await request(app.getHttpServer())
      .post("/langProfRecommends")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastReminderSent: CREATE_RESULT.lastReminderSent.toISOString(),
      });
  });

  test("GET /langProfRecommends", async () => {
    await request(app.getHttpServer())
      .get("/langProfRecommends")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          lastReminderSent: FIND_MANY_RESULT[0].lastReminderSent.toISOString(),
        },
      ]);
  });

  test("GET /langProfRecommends/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/langProfRecommends"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /langProfRecommends/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/langProfRecommends"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        lastReminderSent: FIND_ONE_RESULT.lastReminderSent.toISOString(),
      });
  });

  test("POST /langProfRecommends existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/langProfRecommends")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastReminderSent: CREATE_RESULT.lastReminderSent.toISOString(),
      })
      .then(function () {
        agent
          .post("/langProfRecommends")
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
