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
import { SlateRecommendController } from "../slateRecommend.controller";
import { SlateRecommendService } from "../slateRecommend.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationSlateGuid: "exampleApplicationSlateGuid",
  first: "exampleFirst",
  id: 42,
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  reference1Email: "exampleReference1Email",
  reference1First: "exampleReference1First",
  reference1Industry: "exampleReference1Industry",
  reference1Last: "exampleReference1Last",
  reference1Organization: "exampleReference1Organization",
  reference1Phone: "exampleReference1Phone",
  reference1Submitted: "exampleReference1Submitted",
  reference1Title: "exampleReference1Title",
  reference1Type: "exampleReference1Type",
  referenceNum1IsrmsRecommenderScore1:
    "exampleReferenceNum1IsrmsRecommenderScore1",
  referenceNum1IsrmsRecommenderScore10:
    "exampleReferenceNum1IsrmsRecommenderScore10",
  referenceNum1IsrmsRecommenderScore11:
    "exampleReferenceNum1IsrmsRecommenderScore11",
  referenceNum1IsrmsRecommenderScore12:
    "exampleReferenceNum1IsrmsRecommenderScore12",
  referenceNum1IsrmsRecommenderScore13:
    "exampleReferenceNum1IsrmsRecommenderScore13",
  referenceNum1IsrmsRecommenderScore14:
    "exampleReferenceNum1IsrmsRecommenderScore14",
  referenceNum1IsrmsRecommenderScore15:
    "exampleReferenceNum1IsrmsRecommenderScore15",
  referenceNum1IsrmsRecommenderScore2:
    "exampleReferenceNum1IsrmsRecommenderScore2",
  referenceNum1IsrmsRecommenderScore3:
    "exampleReferenceNum1IsrmsRecommenderScore3",
  referenceNum1IsrmsRecommenderScore4:
    "exampleReferenceNum1IsrmsRecommenderScore4",
  referenceNum1IsrmsRecommenderScore5:
    "exampleReferenceNum1IsrmsRecommenderScore5",
  referenceNum1IsrmsRecommenderScore6:
    "exampleReferenceNum1IsrmsRecommenderScore6",
  referenceNum1IsrmsRecommenderScore7:
    "exampleReferenceNum1IsrmsRecommenderScore7",
  referenceNum1IsrmsRecommenderScore8:
    "exampleReferenceNum1IsrmsRecommenderScore8",
  referenceNum1IsrmsRecommenderScore9:
    "exampleReferenceNum1IsrmsRecommenderScore9",
  referenceNum1MseRecommendationAdditional:
    "exampleReferenceNum1MseRecommendationAdditional",
  referenceNum1MseRecommendationComparison:
    "exampleReferenceNum1MseRecommendationComparison",
  referenceNum1MseRecommendationHowKnown:
    "exampleReferenceNum1MseRecommendationHowKnown",
  referenceNum1MseRecommendationProjectPerformance:
    "exampleReferenceNum1MseRecommendationProjectPerformance",
  referenceNum1MseRecommendationStrengthsWeakness:
    "exampleReferenceNum1MseRecommendationStrengthsWeakness",
  referenceNum1RecommenderScore1: "exampleReferenceNum1RecommenderScore1",
  referenceNum1RecommenderScore2: "exampleReferenceNum1RecommenderScore2",
  referenceNum1RecommenderScore3: "exampleReferenceNum1RecommenderScore3",
  referenceNum1RecommenderScore4: "exampleReferenceNum1RecommenderScore4",
  referenceNum1RecommenderScore5: "exampleReferenceNum1RecommenderScore5",
  referenceNum1RecommenderScore6: "exampleReferenceNum1RecommenderScore6",
  referenceNum1RecommenderScore7: "exampleReferenceNum1RecommenderScore7",
  referenceNum1RecommenderScore8: "exampleReferenceNum1RecommenderScore8",
};
const CREATE_RESULT = {
  applicationSlateGuid: "exampleApplicationSlateGuid",
  first: "exampleFirst",
  id: 42,
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  reference1Email: "exampleReference1Email",
  reference1First: "exampleReference1First",
  reference1Industry: "exampleReference1Industry",
  reference1Last: "exampleReference1Last",
  reference1Organization: "exampleReference1Organization",
  reference1Phone: "exampleReference1Phone",
  reference1Submitted: "exampleReference1Submitted",
  reference1Title: "exampleReference1Title",
  reference1Type: "exampleReference1Type",
  referenceNum1IsrmsRecommenderScore1:
    "exampleReferenceNum1IsrmsRecommenderScore1",
  referenceNum1IsrmsRecommenderScore10:
    "exampleReferenceNum1IsrmsRecommenderScore10",
  referenceNum1IsrmsRecommenderScore11:
    "exampleReferenceNum1IsrmsRecommenderScore11",
  referenceNum1IsrmsRecommenderScore12:
    "exampleReferenceNum1IsrmsRecommenderScore12",
  referenceNum1IsrmsRecommenderScore13:
    "exampleReferenceNum1IsrmsRecommenderScore13",
  referenceNum1IsrmsRecommenderScore14:
    "exampleReferenceNum1IsrmsRecommenderScore14",
  referenceNum1IsrmsRecommenderScore15:
    "exampleReferenceNum1IsrmsRecommenderScore15",
  referenceNum1IsrmsRecommenderScore2:
    "exampleReferenceNum1IsrmsRecommenderScore2",
  referenceNum1IsrmsRecommenderScore3:
    "exampleReferenceNum1IsrmsRecommenderScore3",
  referenceNum1IsrmsRecommenderScore4:
    "exampleReferenceNum1IsrmsRecommenderScore4",
  referenceNum1IsrmsRecommenderScore5:
    "exampleReferenceNum1IsrmsRecommenderScore5",
  referenceNum1IsrmsRecommenderScore6:
    "exampleReferenceNum1IsrmsRecommenderScore6",
  referenceNum1IsrmsRecommenderScore7:
    "exampleReferenceNum1IsrmsRecommenderScore7",
  referenceNum1IsrmsRecommenderScore8:
    "exampleReferenceNum1IsrmsRecommenderScore8",
  referenceNum1IsrmsRecommenderScore9:
    "exampleReferenceNum1IsrmsRecommenderScore9",
  referenceNum1MseRecommendationAdditional:
    "exampleReferenceNum1MseRecommendationAdditional",
  referenceNum1MseRecommendationComparison:
    "exampleReferenceNum1MseRecommendationComparison",
  referenceNum1MseRecommendationHowKnown:
    "exampleReferenceNum1MseRecommendationHowKnown",
  referenceNum1MseRecommendationProjectPerformance:
    "exampleReferenceNum1MseRecommendationProjectPerformance",
  referenceNum1MseRecommendationStrengthsWeakness:
    "exampleReferenceNum1MseRecommendationStrengthsWeakness",
  referenceNum1RecommenderScore1: "exampleReferenceNum1RecommenderScore1",
  referenceNum1RecommenderScore2: "exampleReferenceNum1RecommenderScore2",
  referenceNum1RecommenderScore3: "exampleReferenceNum1RecommenderScore3",
  referenceNum1RecommenderScore4: "exampleReferenceNum1RecommenderScore4",
  referenceNum1RecommenderScore5: "exampleReferenceNum1RecommenderScore5",
  referenceNum1RecommenderScore6: "exampleReferenceNum1RecommenderScore6",
  referenceNum1RecommenderScore7: "exampleReferenceNum1RecommenderScore7",
  referenceNum1RecommenderScore8: "exampleReferenceNum1RecommenderScore8",
};
const FIND_MANY_RESULT = [
  {
    applicationSlateGuid: "exampleApplicationSlateGuid",
    first: "exampleFirst",
    id: 42,
    last: "exampleLast",
    middle: "exampleMiddle",
    prefix: "examplePrefix",
    reference1Email: "exampleReference1Email",
    reference1First: "exampleReference1First",
    reference1Industry: "exampleReference1Industry",
    reference1Last: "exampleReference1Last",
    reference1Organization: "exampleReference1Organization",
    reference1Phone: "exampleReference1Phone",
    reference1Submitted: "exampleReference1Submitted",
    reference1Title: "exampleReference1Title",
    reference1Type: "exampleReference1Type",
    referenceNum1IsrmsRecommenderScore1:
      "exampleReferenceNum1IsrmsRecommenderScore1",
    referenceNum1IsrmsRecommenderScore10:
      "exampleReferenceNum1IsrmsRecommenderScore10",
    referenceNum1IsrmsRecommenderScore11:
      "exampleReferenceNum1IsrmsRecommenderScore11",
    referenceNum1IsrmsRecommenderScore12:
      "exampleReferenceNum1IsrmsRecommenderScore12",
    referenceNum1IsrmsRecommenderScore13:
      "exampleReferenceNum1IsrmsRecommenderScore13",
    referenceNum1IsrmsRecommenderScore14:
      "exampleReferenceNum1IsrmsRecommenderScore14",
    referenceNum1IsrmsRecommenderScore15:
      "exampleReferenceNum1IsrmsRecommenderScore15",
    referenceNum1IsrmsRecommenderScore2:
      "exampleReferenceNum1IsrmsRecommenderScore2",
    referenceNum1IsrmsRecommenderScore3:
      "exampleReferenceNum1IsrmsRecommenderScore3",
    referenceNum1IsrmsRecommenderScore4:
      "exampleReferenceNum1IsrmsRecommenderScore4",
    referenceNum1IsrmsRecommenderScore5:
      "exampleReferenceNum1IsrmsRecommenderScore5",
    referenceNum1IsrmsRecommenderScore6:
      "exampleReferenceNum1IsrmsRecommenderScore6",
    referenceNum1IsrmsRecommenderScore7:
      "exampleReferenceNum1IsrmsRecommenderScore7",
    referenceNum1IsrmsRecommenderScore8:
      "exampleReferenceNum1IsrmsRecommenderScore8",
    referenceNum1IsrmsRecommenderScore9:
      "exampleReferenceNum1IsrmsRecommenderScore9",
    referenceNum1MseRecommendationAdditional:
      "exampleReferenceNum1MseRecommendationAdditional",
    referenceNum1MseRecommendationComparison:
      "exampleReferenceNum1MseRecommendationComparison",
    referenceNum1MseRecommendationHowKnown:
      "exampleReferenceNum1MseRecommendationHowKnown",
    referenceNum1MseRecommendationProjectPerformance:
      "exampleReferenceNum1MseRecommendationProjectPerformance",
    referenceNum1MseRecommendationStrengthsWeakness:
      "exampleReferenceNum1MseRecommendationStrengthsWeakness",
    referenceNum1RecommenderScore1: "exampleReferenceNum1RecommenderScore1",
    referenceNum1RecommenderScore2: "exampleReferenceNum1RecommenderScore2",
    referenceNum1RecommenderScore3: "exampleReferenceNum1RecommenderScore3",
    referenceNum1RecommenderScore4: "exampleReferenceNum1RecommenderScore4",
    referenceNum1RecommenderScore5: "exampleReferenceNum1RecommenderScore5",
    referenceNum1RecommenderScore6: "exampleReferenceNum1RecommenderScore6",
    referenceNum1RecommenderScore7: "exampleReferenceNum1RecommenderScore7",
    referenceNum1RecommenderScore8: "exampleReferenceNum1RecommenderScore8",
  },
];
const FIND_ONE_RESULT = {
  applicationSlateGuid: "exampleApplicationSlateGuid",
  first: "exampleFirst",
  id: 42,
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  reference1Email: "exampleReference1Email",
  reference1First: "exampleReference1First",
  reference1Industry: "exampleReference1Industry",
  reference1Last: "exampleReference1Last",
  reference1Organization: "exampleReference1Organization",
  reference1Phone: "exampleReference1Phone",
  reference1Submitted: "exampleReference1Submitted",
  reference1Title: "exampleReference1Title",
  reference1Type: "exampleReference1Type",
  referenceNum1IsrmsRecommenderScore1:
    "exampleReferenceNum1IsrmsRecommenderScore1",
  referenceNum1IsrmsRecommenderScore10:
    "exampleReferenceNum1IsrmsRecommenderScore10",
  referenceNum1IsrmsRecommenderScore11:
    "exampleReferenceNum1IsrmsRecommenderScore11",
  referenceNum1IsrmsRecommenderScore12:
    "exampleReferenceNum1IsrmsRecommenderScore12",
  referenceNum1IsrmsRecommenderScore13:
    "exampleReferenceNum1IsrmsRecommenderScore13",
  referenceNum1IsrmsRecommenderScore14:
    "exampleReferenceNum1IsrmsRecommenderScore14",
  referenceNum1IsrmsRecommenderScore15:
    "exampleReferenceNum1IsrmsRecommenderScore15",
  referenceNum1IsrmsRecommenderScore2:
    "exampleReferenceNum1IsrmsRecommenderScore2",
  referenceNum1IsrmsRecommenderScore3:
    "exampleReferenceNum1IsrmsRecommenderScore3",
  referenceNum1IsrmsRecommenderScore4:
    "exampleReferenceNum1IsrmsRecommenderScore4",
  referenceNum1IsrmsRecommenderScore5:
    "exampleReferenceNum1IsrmsRecommenderScore5",
  referenceNum1IsrmsRecommenderScore6:
    "exampleReferenceNum1IsrmsRecommenderScore6",
  referenceNum1IsrmsRecommenderScore7:
    "exampleReferenceNum1IsrmsRecommenderScore7",
  referenceNum1IsrmsRecommenderScore8:
    "exampleReferenceNum1IsrmsRecommenderScore8",
  referenceNum1IsrmsRecommenderScore9:
    "exampleReferenceNum1IsrmsRecommenderScore9",
  referenceNum1MseRecommendationAdditional:
    "exampleReferenceNum1MseRecommendationAdditional",
  referenceNum1MseRecommendationComparison:
    "exampleReferenceNum1MseRecommendationComparison",
  referenceNum1MseRecommendationHowKnown:
    "exampleReferenceNum1MseRecommendationHowKnown",
  referenceNum1MseRecommendationProjectPerformance:
    "exampleReferenceNum1MseRecommendationProjectPerformance",
  referenceNum1MseRecommendationStrengthsWeakness:
    "exampleReferenceNum1MseRecommendationStrengthsWeakness",
  referenceNum1RecommenderScore1: "exampleReferenceNum1RecommenderScore1",
  referenceNum1RecommenderScore2: "exampleReferenceNum1RecommenderScore2",
  referenceNum1RecommenderScore3: "exampleReferenceNum1RecommenderScore3",
  referenceNum1RecommenderScore4: "exampleReferenceNum1RecommenderScore4",
  referenceNum1RecommenderScore5: "exampleReferenceNum1RecommenderScore5",
  referenceNum1RecommenderScore6: "exampleReferenceNum1RecommenderScore6",
  referenceNum1RecommenderScore7: "exampleReferenceNum1RecommenderScore7",
  referenceNum1RecommenderScore8: "exampleReferenceNum1RecommenderScore8",
};

const service = {
  createSlateRecommend() {
    return CREATE_RESULT;
  },
  slateRecommends: () => FIND_MANY_RESULT,
  slateRecommend: ({ where }: { where: { id: string } }) => {
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

describe("SlateRecommend", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateRecommendService,
          useValue: service,
        },
      ],
      controllers: [SlateRecommendController],
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

  test("POST /slateRecommends", async () => {
    await request(app.getHttpServer())
      .post("/slateRecommends")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateRecommends", async () => {
    await request(app.getHttpServer())
      .get("/slateRecommends")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateRecommends/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateRecommends"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateRecommends/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateRecommends"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateRecommends existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateRecommends")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateRecommends")
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
