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
import { ReviewController } from "../review.controller";
import { ReviewService } from "../review.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  reviewerId: 42,
  background: "exampleBackground",
  grades: "exampleGrades",
  statement: "exampleStatement",
  comments: "exampleComments",
  point: 42.424242424,
  pointCertainty: 42.424242424,
  point2: 42.424242424,
  point2Certainty: 42.424242424,
  privateComments: "examplePrivateComments",
  round2: 42,
  round3: 42,
  touched: "exampleTouched",
  admitVote: "exampleAdmitVote",
  recruited: "true",
  gradName: "exampleGradName",
  pertinentInfo: "examplePertinentInfo",
  adviseTime: "exampleAdviseTime",
  commitMoney: "exampleCommitMoney",
  fundSource: "exampleFundSource",
  round: 42,
  interview: "exampleInterview",
  recommendations: "exampleRecommendations",
  publications: "examplePublications",
  brilliance: "exampleBrilliance",
  otherInterest: "exampleOtherInterest",
  supplementalReview: 42,
  facVote: "exampleFacVote",
  committeeVote: "exampleCommitteeVote",
  rrank: "exampleRrank",
  departmentId: 42,
  mseExperienceLen: "exampleMseExperienceLen",
  impressed: "exampleImpressed",
  updated: new Date(),
  id: 42,
};
const CREATE_RESULT = {
  reviewerId: 42,
  background: "exampleBackground",
  grades: "exampleGrades",
  statement: "exampleStatement",
  comments: "exampleComments",
  point: 42.424242424,
  pointCertainty: 42.424242424,
  point2: 42.424242424,
  point2Certainty: 42.424242424,
  privateComments: "examplePrivateComments",
  round2: 42,
  round3: 42,
  touched: "exampleTouched",
  admitVote: "exampleAdmitVote",
  recruited: "true",
  gradName: "exampleGradName",
  pertinentInfo: "examplePertinentInfo",
  adviseTime: "exampleAdviseTime",
  commitMoney: "exampleCommitMoney",
  fundSource: "exampleFundSource",
  round: 42,
  interview: "exampleInterview",
  recommendations: "exampleRecommendations",
  publications: "examplePublications",
  brilliance: "exampleBrilliance",
  otherInterest: "exampleOtherInterest",
  supplementalReview: 42,
  facVote: "exampleFacVote",
  committeeVote: "exampleCommitteeVote",
  rrank: "exampleRrank",
  departmentId: 42,
  mseExperienceLen: "exampleMseExperienceLen",
  impressed: "exampleImpressed",
  updated: new Date(),
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    reviewerId: 42,
    background: "exampleBackground",
    grades: "exampleGrades",
    statement: "exampleStatement",
    comments: "exampleComments",
    point: 42.424242424,
    pointCertainty: 42.424242424,
    point2: 42.424242424,
    point2Certainty: 42.424242424,
    privateComments: "examplePrivateComments",
    round2: 42,
    round3: 42,
    touched: "exampleTouched",
    admitVote: "exampleAdmitVote",
    recruited: "true",
    gradName: "exampleGradName",
    pertinentInfo: "examplePertinentInfo",
    adviseTime: "exampleAdviseTime",
    commitMoney: "exampleCommitMoney",
    fundSource: "exampleFundSource",
    round: 42,
    interview: "exampleInterview",
    recommendations: "exampleRecommendations",
    publications: "examplePublications",
    brilliance: "exampleBrilliance",
    otherInterest: "exampleOtherInterest",
    supplementalReview: 42,
    facVote: "exampleFacVote",
    committeeVote: "exampleCommitteeVote",
    rrank: "exampleRrank",
    departmentId: 42,
    mseExperienceLen: "exampleMseExperienceLen",
    impressed: "exampleImpressed",
    updated: new Date(),
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  reviewerId: 42,
  background: "exampleBackground",
  grades: "exampleGrades",
  statement: "exampleStatement",
  comments: "exampleComments",
  point: 42.424242424,
  pointCertainty: 42.424242424,
  point2: 42.424242424,
  point2Certainty: 42.424242424,
  privateComments: "examplePrivateComments",
  round2: 42,
  round3: 42,
  touched: "exampleTouched",
  admitVote: "exampleAdmitVote",
  recruited: "true",
  gradName: "exampleGradName",
  pertinentInfo: "examplePertinentInfo",
  adviseTime: "exampleAdviseTime",
  commitMoney: "exampleCommitMoney",
  fundSource: "exampleFundSource",
  round: 42,
  interview: "exampleInterview",
  recommendations: "exampleRecommendations",
  publications: "examplePublications",
  brilliance: "exampleBrilliance",
  otherInterest: "exampleOtherInterest",
  supplementalReview: 42,
  facVote: "exampleFacVote",
  committeeVote: "exampleCommitteeVote",
  rrank: "exampleRrank",
  departmentId: 42,
  mseExperienceLen: "exampleMseExperienceLen",
  impressed: "exampleImpressed",
  updated: new Date(),
  id: 42,
};

const service = {
  createReview() {
    return CREATE_RESULT;
  },
  reviews: () => FIND_MANY_RESULT,
  review: ({ where }: { where: { id: string } }) => {
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

describe("Review", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ReviewService,
          useValue: service,
        },
      ],
      controllers: [ReviewController],
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

  test("POST /reviews", async () => {
    await request(app.getHttpServer())
      .post("/reviews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /reviews", async () => {
    await request(app.getHttpServer())
      .get("/reviews")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /reviews/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reviews"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /reviews/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reviews"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /reviews existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/reviews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/reviews")
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
