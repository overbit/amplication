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
import { LanguageAssessmentController } from "../languageAssessment.controller";
import { LanguageAssessmentService } from "../languageAssessment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  competencyEvidence: "exampleCompetencyEvidence",
  id: 42,
  language: "exampleLanguage",
  listening: 42,
  nativeSpeaker: 42,
  reading: 42,
  speaking: 42,
  studyLevel: 42,
  writing: 42,
  yearsStudy: 42,
};
const CREATE_RESULT = {
  applicationId: 42,
  competencyEvidence: "exampleCompetencyEvidence",
  id: 42,
  language: "exampleLanguage",
  listening: 42,
  nativeSpeaker: 42,
  reading: 42,
  speaking: 42,
  studyLevel: 42,
  writing: 42,
  yearsStudy: 42,
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    competencyEvidence: "exampleCompetencyEvidence",
    id: 42,
    language: "exampleLanguage",
    listening: 42,
    nativeSpeaker: 42,
    reading: 42,
    speaking: 42,
    studyLevel: 42,
    writing: 42,
    yearsStudy: 42,
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  competencyEvidence: "exampleCompetencyEvidence",
  id: 42,
  language: "exampleLanguage",
  listening: 42,
  nativeSpeaker: 42,
  reading: 42,
  speaking: 42,
  studyLevel: 42,
  writing: 42,
  yearsStudy: 42,
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

describe("LanguageAssessment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LanguageAssessmentService,
          useValue: service,
        },
      ],
      controllers: [LanguageAssessmentController],
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

  test("POST /languageAssessments", async () => {
    await request(app.getHttpServer())
      .post("/languageAssessments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /languageAssessments", async () => {
    await request(app.getHttpServer())
      .get("/languageAssessments")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /languageAssessments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/languageAssessments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /languageAssessments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/languageAssessments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /languageAssessments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/languageAssessments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/languageAssessments")
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
