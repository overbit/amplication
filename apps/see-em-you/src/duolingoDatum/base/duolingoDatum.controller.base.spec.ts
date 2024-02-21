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
import { DuolingoDatumController } from "../duolingoDatum.controller";
import { DuolingoDatumService } from "../duolingoDatum.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  lastName: "exampleLastName",
  givenNames: "exampleGivenNames",
  couponId: "exampleCouponId",
  sessionId: "exampleSessionId",
  fullName: "exampleFullName",
  firstName: "exampleFirstName",
  userId: "exampleUserId",
  certificateUrl: "exampleCertificateUrl",
  middleNames: "exampleMiddleNames",
  applicantId: 42,
  surnames: "exampleSurnames",
  email: "exampleEmail",
  embedUrl: "exampleEmbedUrl",
  interviewUrl: "exampleInterviewUrl",
  language: "exampleLanguage",
  country: "exampleCountry",
  birthdate: new Date(),
  testDate: new Date(),
  verificationDate: new Date(),
  overallScore: 42,
  scale: 42,
  conversationSubscore: 42,
  productionSubscore: 42,
  literacySubscore: 42,
  certified: 42,
  comprehensionSubscore: 42,
  percentScore: 42,
  applicationId: 42,
  school: "exampleSchool",
  domain: "exampleDomain",
  insertDate: new Date(),
  id: 42,
};
const CREATE_RESULT = {
  lastName: "exampleLastName",
  givenNames: "exampleGivenNames",
  couponId: "exampleCouponId",
  sessionId: "exampleSessionId",
  fullName: "exampleFullName",
  firstName: "exampleFirstName",
  userId: "exampleUserId",
  certificateUrl: "exampleCertificateUrl",
  middleNames: "exampleMiddleNames",
  applicantId: 42,
  surnames: "exampleSurnames",
  email: "exampleEmail",
  embedUrl: "exampleEmbedUrl",
  interviewUrl: "exampleInterviewUrl",
  language: "exampleLanguage",
  country: "exampleCountry",
  birthdate: new Date(),
  testDate: new Date(),
  verificationDate: new Date(),
  overallScore: 42,
  scale: 42,
  conversationSubscore: 42,
  productionSubscore: 42,
  literacySubscore: 42,
  certified: 42,
  comprehensionSubscore: 42,
  percentScore: 42,
  applicationId: 42,
  school: "exampleSchool",
  domain: "exampleDomain",
  insertDate: new Date(),
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    lastName: "exampleLastName",
    givenNames: "exampleGivenNames",
    couponId: "exampleCouponId",
    sessionId: "exampleSessionId",
    fullName: "exampleFullName",
    firstName: "exampleFirstName",
    userId: "exampleUserId",
    certificateUrl: "exampleCertificateUrl",
    middleNames: "exampleMiddleNames",
    applicantId: 42,
    surnames: "exampleSurnames",
    email: "exampleEmail",
    embedUrl: "exampleEmbedUrl",
    interviewUrl: "exampleInterviewUrl",
    language: "exampleLanguage",
    country: "exampleCountry",
    birthdate: new Date(),
    testDate: new Date(),
    verificationDate: new Date(),
    overallScore: 42,
    scale: 42,
    conversationSubscore: 42,
    productionSubscore: 42,
    literacySubscore: 42,
    certified: 42,
    comprehensionSubscore: 42,
    percentScore: 42,
    applicationId: 42,
    school: "exampleSchool",
    domain: "exampleDomain",
    insertDate: new Date(),
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  lastName: "exampleLastName",
  givenNames: "exampleGivenNames",
  couponId: "exampleCouponId",
  sessionId: "exampleSessionId",
  fullName: "exampleFullName",
  firstName: "exampleFirstName",
  userId: "exampleUserId",
  certificateUrl: "exampleCertificateUrl",
  middleNames: "exampleMiddleNames",
  applicantId: 42,
  surnames: "exampleSurnames",
  email: "exampleEmail",
  embedUrl: "exampleEmbedUrl",
  interviewUrl: "exampleInterviewUrl",
  language: "exampleLanguage",
  country: "exampleCountry",
  birthdate: new Date(),
  testDate: new Date(),
  verificationDate: new Date(),
  overallScore: 42,
  scale: 42,
  conversationSubscore: 42,
  productionSubscore: 42,
  literacySubscore: 42,
  certified: 42,
  comprehensionSubscore: 42,
  percentScore: 42,
  applicationId: 42,
  school: "exampleSchool",
  domain: "exampleDomain",
  insertDate: new Date(),
  id: 42,
};

const service = {
  createDuolingoDatum() {
    return CREATE_RESULT;
  },
  duolingoData: () => FIND_MANY_RESULT,
  duolingoDatum: ({ where }: { where: { id: string } }) => {
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

describe("DuolingoDatum", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DuolingoDatumService,
          useValue: service,
        },
      ],
      controllers: [DuolingoDatumController],
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

  test("POST /duolingoData", async () => {
    await request(app.getHttpServer())
      .post("/duolingoData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        birthdate: CREATE_RESULT.birthdate.toISOString(),
        testDate: CREATE_RESULT.testDate.toISOString(),
        verificationDate: CREATE_RESULT.verificationDate.toISOString(),
        insertDate: CREATE_RESULT.insertDate.toISOString(),
      });
  });

  test("GET /duolingoData", async () => {
    await request(app.getHttpServer())
      .get("/duolingoData")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          birthdate: FIND_MANY_RESULT[0].birthdate.toISOString(),
          testDate: FIND_MANY_RESULT[0].testDate.toISOString(),
          verificationDate: FIND_MANY_RESULT[0].verificationDate.toISOString(),
          insertDate: FIND_MANY_RESULT[0].insertDate.toISOString(),
        },
      ]);
  });

  test("GET /duolingoData/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/duolingoData"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /duolingoData/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/duolingoData"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        birthdate: FIND_ONE_RESULT.birthdate.toISOString(),
        testDate: FIND_ONE_RESULT.testDate.toISOString(),
        verificationDate: FIND_ONE_RESULT.verificationDate.toISOString(),
        insertDate: FIND_ONE_RESULT.insertDate.toISOString(),
      });
  });

  test("POST /duolingoData existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/duolingoData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        birthdate: CREATE_RESULT.birthdate.toISOString(),
        testDate: CREATE_RESULT.testDate.toISOString(),
        verificationDate: CREATE_RESULT.verificationDate.toISOString(),
        insertDate: CREATE_RESULT.insertDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/duolingoData")
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
