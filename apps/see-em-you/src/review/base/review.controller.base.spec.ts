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
import { ReviewController } from "../review.controller";
import { ReviewService } from "../review.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  admitVote: "exampleAdmitVote",
  adviseTime: "exampleAdviseTime",
  background: "exampleBackground",
  brilliance: "exampleBrilliance",
  comments: "exampleComments",
  commitMoney: "exampleCommitMoney",
  committeeVote: "exampleCommitteeVote",
  departmentId: 42,
  facVote: "exampleFacVote",
  fundSource: "exampleFundSource",
  grades: "exampleGrades",
  gradName: "exampleGradName",
  id: 42,
  impressed: "exampleImpressed",
  interview: "exampleInterview",
  mseExperienceLen: "exampleMseExperienceLen",
  otherInterest: "exampleOtherInterest",
  pertinentInfo: "examplePertinentInfo",
  point: 42.424242424,
  point2: 42.424242424,
  point2Certainty: 42.424242424,
  pointCertainty: 42.424242424,
  privateComments: "examplePrivateComments",
  publications: "examplePublications",
  recommendations: "exampleRecommendations",
  recruited: "true",
  reviewerId: 42,
  round: 42,
  round2: 42,
  round3: 42,
  rrank: "exampleRrank",
  statement: "exampleStatement",
  supplementalReview: 42,
  touched: "exampleTouched",
  updated: new Date(),
};
const CREATE_RESULT = {
  admitVote: "exampleAdmitVote",
  adviseTime: "exampleAdviseTime",
  background: "exampleBackground",
  brilliance: "exampleBrilliance",
  comments: "exampleComments",
  commitMoney: "exampleCommitMoney",
  committeeVote: "exampleCommitteeVote",
  departmentId: 42,
  facVote: "exampleFacVote",
  fundSource: "exampleFundSource",
  grades: "exampleGrades",
  gradName: "exampleGradName",
  id: 42,
  impressed: "exampleImpressed",
  interview: "exampleInterview",
  mseExperienceLen: "exampleMseExperienceLen",
  otherInterest: "exampleOtherInterest",
  pertinentInfo: "examplePertinentInfo",
  point: 42.424242424,
  point2: 42.424242424,
  point2Certainty: 42.424242424,
  pointCertainty: 42.424242424,
  privateComments: "examplePrivateComments",
  publications: "examplePublications",
  recommendations: "exampleRecommendations",
  recruited: "true",
  reviewerId: 42,
  round: 42,
  round2: 42,
  round3: 42,
  rrank: "exampleRrank",
  statement: "exampleStatement",
  supplementalReview: 42,
  touched: "exampleTouched",
  updated: new Date(),
};
const FIND_MANY_RESULT = [
  {
    admitVote: "exampleAdmitVote",
    adviseTime: "exampleAdviseTime",
    background: "exampleBackground",
    brilliance: "exampleBrilliance",
    comments: "exampleComments",
    commitMoney: "exampleCommitMoney",
    committeeVote: "exampleCommitteeVote",
    departmentId: 42,
    facVote: "exampleFacVote",
    fundSource: "exampleFundSource",
    grades: "exampleGrades",
    gradName: "exampleGradName",
    id: 42,
    impressed: "exampleImpressed",
    interview: "exampleInterview",
    mseExperienceLen: "exampleMseExperienceLen",
    otherInterest: "exampleOtherInterest",
    pertinentInfo: "examplePertinentInfo",
    point: 42.424242424,
    point2: 42.424242424,
    point2Certainty: 42.424242424,
    pointCertainty: 42.424242424,
    privateComments: "examplePrivateComments",
    publications: "examplePublications",
    recommendations: "exampleRecommendations",
    recruited: "true",
    reviewerId: 42,
    round: 42,
    round2: 42,
    round3: 42,
    rrank: "exampleRrank",
    statement: "exampleStatement",
    supplementalReview: 42,
    touched: "exampleTouched",
    updated: new Date(),
  },
];
const FIND_ONE_RESULT = {
  admitVote: "exampleAdmitVote",
  adviseTime: "exampleAdviseTime",
  background: "exampleBackground",
  brilliance: "exampleBrilliance",
  comments: "exampleComments",
  commitMoney: "exampleCommitMoney",
  committeeVote: "exampleCommitteeVote",
  departmentId: 42,
  facVote: "exampleFacVote",
  fundSource: "exampleFundSource",
  grades: "exampleGrades",
  gradName: "exampleGradName",
  id: 42,
  impressed: "exampleImpressed",
  interview: "exampleInterview",
  mseExperienceLen: "exampleMseExperienceLen",
  otherInterest: "exampleOtherInterest",
  pertinentInfo: "examplePertinentInfo",
  point: 42.424242424,
  point2: 42.424242424,
  point2Certainty: 42.424242424,
  pointCertainty: 42.424242424,
  privateComments: "examplePrivateComments",
  publications: "examplePublications",
  recommendations: "exampleRecommendations",
  recruited: "true",
  reviewerId: 42,
  round: 42,
  round2: 42,
  round3: 42,
  rrank: "exampleRrank",
  statement: "exampleStatement",
  supplementalReview: 42,
  touched: "exampleTouched",
  updated: new Date(),
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
