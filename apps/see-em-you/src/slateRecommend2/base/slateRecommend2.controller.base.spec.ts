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
import { SlateRecommend2Controller } from "../slateRecommend2.controller";
import { SlateRecommend2Service } from "../slateRecommend2.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  reference2Type: "exampleReference2Type",
  reference2Submitted: "exampleReference2Submitted",
  reference2First: "exampleReference2First",
  reference2Last: "exampleReference2Last",
  reference2Industry: "exampleReference2Industry",
  reference2Organization: "exampleReference2Organization",
  reference2Title: "exampleReference2Title",
  reference2Email: "exampleReference2Email",
  reference2Phone: "exampleReference2Phone",
  referenceNum2IsrmsRecommenderScore1:
    "exampleReferenceNum2IsrmsRecommenderScore1",
  referenceNum2IsrmsRecommenderScore10:
    "exampleReferenceNum2IsrmsRecommenderScore10",
  referenceNum2IsrmsRecommenderScore11:
    "exampleReferenceNum2IsrmsRecommenderScore11",
  referenceNum2IsrmsRecommenderScore12:
    "exampleReferenceNum2IsrmsRecommenderScore12",
  referenceNum2IsrmsRecommenderScore13:
    "exampleReferenceNum2IsrmsRecommenderScore13",
  referenceNum2IsrmsRecommenderScore14:
    "exampleReferenceNum2IsrmsRecommenderScore14",
  referenceNum2IsrmsRecommenderScore15:
    "exampleReferenceNum2IsrmsRecommenderScore15",
  referenceNum2IsrmsRecommenderScore2:
    "exampleReferenceNum2IsrmsRecommenderScore2",
  referenceNum2IsrmsRecommenderScore3:
    "exampleReferenceNum2IsrmsRecommenderScore3",
  referenceNum2IsrmsRecommenderScore4:
    "exampleReferenceNum2IsrmsRecommenderScore4",
  referenceNum2IsrmsRecommenderScore5:
    "exampleReferenceNum2IsrmsRecommenderScore5",
  referenceNum2IsrmsRecommenderScore6:
    "exampleReferenceNum2IsrmsRecommenderScore6",
  referenceNum2IsrmsRecommenderScore7:
    "exampleReferenceNum2IsrmsRecommenderScore7",
  referenceNum2IsrmsRecommenderScore8:
    "exampleReferenceNum2IsrmsRecommenderScore8",
  referenceNum2IsrmsRecommenderScore9:
    "exampleReferenceNum2IsrmsRecommenderScore9",
  referenceNum2MseRecommendationAdditional:
    "exampleReferenceNum2MseRecommendationAdditional",
  referenceNum2MseRecommendationComparison:
    "exampleReferenceNum2MseRecommendationComparison",
  referenceNum2MseRecommendationHowKnown:
    "exampleReferenceNum2MseRecommendationHowKnown",
  referenceNum2MseRecommendationProjectPerformance:
    "exampleReferenceNum2MseRecommendationProjectPerformance",
  referenceNum2MseRecommendationStrengthsWeakness:
    "exampleReferenceNum2MseRecommendationStrengthsWeakness",
  referenceNum2RecommenderScore1: "exampleReferenceNum2RecommenderScore1",
  referenceNum2RecommenderScore2: "exampleReferenceNum2RecommenderScore2",
  referenceNum2RecommenderScore3: "exampleReferenceNum2RecommenderScore3",
  referenceNum2RecommenderScore4: "exampleReferenceNum2RecommenderScore4",
  referenceNum2RecommenderScore5: "exampleReferenceNum2RecommenderScore5",
  referenceNum2RecommenderScore6: "exampleReferenceNum2RecommenderScore6",
  referenceNum2RecommenderScore7: "exampleReferenceNum2RecommenderScore7",
  referenceNum2RecommenderScore8: "exampleReferenceNum2RecommenderScore8",
  id: "exampleId",
};
const CREATE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  reference2Type: "exampleReference2Type",
  reference2Submitted: "exampleReference2Submitted",
  reference2First: "exampleReference2First",
  reference2Last: "exampleReference2Last",
  reference2Industry: "exampleReference2Industry",
  reference2Organization: "exampleReference2Organization",
  reference2Title: "exampleReference2Title",
  reference2Email: "exampleReference2Email",
  reference2Phone: "exampleReference2Phone",
  referenceNum2IsrmsRecommenderScore1:
    "exampleReferenceNum2IsrmsRecommenderScore1",
  referenceNum2IsrmsRecommenderScore10:
    "exampleReferenceNum2IsrmsRecommenderScore10",
  referenceNum2IsrmsRecommenderScore11:
    "exampleReferenceNum2IsrmsRecommenderScore11",
  referenceNum2IsrmsRecommenderScore12:
    "exampleReferenceNum2IsrmsRecommenderScore12",
  referenceNum2IsrmsRecommenderScore13:
    "exampleReferenceNum2IsrmsRecommenderScore13",
  referenceNum2IsrmsRecommenderScore14:
    "exampleReferenceNum2IsrmsRecommenderScore14",
  referenceNum2IsrmsRecommenderScore15:
    "exampleReferenceNum2IsrmsRecommenderScore15",
  referenceNum2IsrmsRecommenderScore2:
    "exampleReferenceNum2IsrmsRecommenderScore2",
  referenceNum2IsrmsRecommenderScore3:
    "exampleReferenceNum2IsrmsRecommenderScore3",
  referenceNum2IsrmsRecommenderScore4:
    "exampleReferenceNum2IsrmsRecommenderScore4",
  referenceNum2IsrmsRecommenderScore5:
    "exampleReferenceNum2IsrmsRecommenderScore5",
  referenceNum2IsrmsRecommenderScore6:
    "exampleReferenceNum2IsrmsRecommenderScore6",
  referenceNum2IsrmsRecommenderScore7:
    "exampleReferenceNum2IsrmsRecommenderScore7",
  referenceNum2IsrmsRecommenderScore8:
    "exampleReferenceNum2IsrmsRecommenderScore8",
  referenceNum2IsrmsRecommenderScore9:
    "exampleReferenceNum2IsrmsRecommenderScore9",
  referenceNum2MseRecommendationAdditional:
    "exampleReferenceNum2MseRecommendationAdditional",
  referenceNum2MseRecommendationComparison:
    "exampleReferenceNum2MseRecommendationComparison",
  referenceNum2MseRecommendationHowKnown:
    "exampleReferenceNum2MseRecommendationHowKnown",
  referenceNum2MseRecommendationProjectPerformance:
    "exampleReferenceNum2MseRecommendationProjectPerformance",
  referenceNum2MseRecommendationStrengthsWeakness:
    "exampleReferenceNum2MseRecommendationStrengthsWeakness",
  referenceNum2RecommenderScore1: "exampleReferenceNum2RecommenderScore1",
  referenceNum2RecommenderScore2: "exampleReferenceNum2RecommenderScore2",
  referenceNum2RecommenderScore3: "exampleReferenceNum2RecommenderScore3",
  referenceNum2RecommenderScore4: "exampleReferenceNum2RecommenderScore4",
  referenceNum2RecommenderScore5: "exampleReferenceNum2RecommenderScore5",
  referenceNum2RecommenderScore6: "exampleReferenceNum2RecommenderScore6",
  referenceNum2RecommenderScore7: "exampleReferenceNum2RecommenderScore7",
  referenceNum2RecommenderScore8: "exampleReferenceNum2RecommenderScore8",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    prefix: "examplePrefix",
    first: "exampleFirst",
    middle: "exampleMiddle",
    last: "exampleLast",
    reference2Type: "exampleReference2Type",
    reference2Submitted: "exampleReference2Submitted",
    reference2First: "exampleReference2First",
    reference2Last: "exampleReference2Last",
    reference2Industry: "exampleReference2Industry",
    reference2Organization: "exampleReference2Organization",
    reference2Title: "exampleReference2Title",
    reference2Email: "exampleReference2Email",
    reference2Phone: "exampleReference2Phone",
    referenceNum2IsrmsRecommenderScore1:
      "exampleReferenceNum2IsrmsRecommenderScore1",
    referenceNum2IsrmsRecommenderScore10:
      "exampleReferenceNum2IsrmsRecommenderScore10",
    referenceNum2IsrmsRecommenderScore11:
      "exampleReferenceNum2IsrmsRecommenderScore11",
    referenceNum2IsrmsRecommenderScore12:
      "exampleReferenceNum2IsrmsRecommenderScore12",
    referenceNum2IsrmsRecommenderScore13:
      "exampleReferenceNum2IsrmsRecommenderScore13",
    referenceNum2IsrmsRecommenderScore14:
      "exampleReferenceNum2IsrmsRecommenderScore14",
    referenceNum2IsrmsRecommenderScore15:
      "exampleReferenceNum2IsrmsRecommenderScore15",
    referenceNum2IsrmsRecommenderScore2:
      "exampleReferenceNum2IsrmsRecommenderScore2",
    referenceNum2IsrmsRecommenderScore3:
      "exampleReferenceNum2IsrmsRecommenderScore3",
    referenceNum2IsrmsRecommenderScore4:
      "exampleReferenceNum2IsrmsRecommenderScore4",
    referenceNum2IsrmsRecommenderScore5:
      "exampleReferenceNum2IsrmsRecommenderScore5",
    referenceNum2IsrmsRecommenderScore6:
      "exampleReferenceNum2IsrmsRecommenderScore6",
    referenceNum2IsrmsRecommenderScore7:
      "exampleReferenceNum2IsrmsRecommenderScore7",
    referenceNum2IsrmsRecommenderScore8:
      "exampleReferenceNum2IsrmsRecommenderScore8",
    referenceNum2IsrmsRecommenderScore9:
      "exampleReferenceNum2IsrmsRecommenderScore9",
    referenceNum2MseRecommendationAdditional:
      "exampleReferenceNum2MseRecommendationAdditional",
    referenceNum2MseRecommendationComparison:
      "exampleReferenceNum2MseRecommendationComparison",
    referenceNum2MseRecommendationHowKnown:
      "exampleReferenceNum2MseRecommendationHowKnown",
    referenceNum2MseRecommendationProjectPerformance:
      "exampleReferenceNum2MseRecommendationProjectPerformance",
    referenceNum2MseRecommendationStrengthsWeakness:
      "exampleReferenceNum2MseRecommendationStrengthsWeakness",
    referenceNum2RecommenderScore1: "exampleReferenceNum2RecommenderScore1",
    referenceNum2RecommenderScore2: "exampleReferenceNum2RecommenderScore2",
    referenceNum2RecommenderScore3: "exampleReferenceNum2RecommenderScore3",
    referenceNum2RecommenderScore4: "exampleReferenceNum2RecommenderScore4",
    referenceNum2RecommenderScore5: "exampleReferenceNum2RecommenderScore5",
    referenceNum2RecommenderScore6: "exampleReferenceNum2RecommenderScore6",
    referenceNum2RecommenderScore7: "exampleReferenceNum2RecommenderScore7",
    referenceNum2RecommenderScore8: "exampleReferenceNum2RecommenderScore8",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  reference2Type: "exampleReference2Type",
  reference2Submitted: "exampleReference2Submitted",
  reference2First: "exampleReference2First",
  reference2Last: "exampleReference2Last",
  reference2Industry: "exampleReference2Industry",
  reference2Organization: "exampleReference2Organization",
  reference2Title: "exampleReference2Title",
  reference2Email: "exampleReference2Email",
  reference2Phone: "exampleReference2Phone",
  referenceNum2IsrmsRecommenderScore1:
    "exampleReferenceNum2IsrmsRecommenderScore1",
  referenceNum2IsrmsRecommenderScore10:
    "exampleReferenceNum2IsrmsRecommenderScore10",
  referenceNum2IsrmsRecommenderScore11:
    "exampleReferenceNum2IsrmsRecommenderScore11",
  referenceNum2IsrmsRecommenderScore12:
    "exampleReferenceNum2IsrmsRecommenderScore12",
  referenceNum2IsrmsRecommenderScore13:
    "exampleReferenceNum2IsrmsRecommenderScore13",
  referenceNum2IsrmsRecommenderScore14:
    "exampleReferenceNum2IsrmsRecommenderScore14",
  referenceNum2IsrmsRecommenderScore15:
    "exampleReferenceNum2IsrmsRecommenderScore15",
  referenceNum2IsrmsRecommenderScore2:
    "exampleReferenceNum2IsrmsRecommenderScore2",
  referenceNum2IsrmsRecommenderScore3:
    "exampleReferenceNum2IsrmsRecommenderScore3",
  referenceNum2IsrmsRecommenderScore4:
    "exampleReferenceNum2IsrmsRecommenderScore4",
  referenceNum2IsrmsRecommenderScore5:
    "exampleReferenceNum2IsrmsRecommenderScore5",
  referenceNum2IsrmsRecommenderScore6:
    "exampleReferenceNum2IsrmsRecommenderScore6",
  referenceNum2IsrmsRecommenderScore7:
    "exampleReferenceNum2IsrmsRecommenderScore7",
  referenceNum2IsrmsRecommenderScore8:
    "exampleReferenceNum2IsrmsRecommenderScore8",
  referenceNum2IsrmsRecommenderScore9:
    "exampleReferenceNum2IsrmsRecommenderScore9",
  referenceNum2MseRecommendationAdditional:
    "exampleReferenceNum2MseRecommendationAdditional",
  referenceNum2MseRecommendationComparison:
    "exampleReferenceNum2MseRecommendationComparison",
  referenceNum2MseRecommendationHowKnown:
    "exampleReferenceNum2MseRecommendationHowKnown",
  referenceNum2MseRecommendationProjectPerformance:
    "exampleReferenceNum2MseRecommendationProjectPerformance",
  referenceNum2MseRecommendationStrengthsWeakness:
    "exampleReferenceNum2MseRecommendationStrengthsWeakness",
  referenceNum2RecommenderScore1: "exampleReferenceNum2RecommenderScore1",
  referenceNum2RecommenderScore2: "exampleReferenceNum2RecommenderScore2",
  referenceNum2RecommenderScore3: "exampleReferenceNum2RecommenderScore3",
  referenceNum2RecommenderScore4: "exampleReferenceNum2RecommenderScore4",
  referenceNum2RecommenderScore5: "exampleReferenceNum2RecommenderScore5",
  referenceNum2RecommenderScore6: "exampleReferenceNum2RecommenderScore6",
  referenceNum2RecommenderScore7: "exampleReferenceNum2RecommenderScore7",
  referenceNum2RecommenderScore8: "exampleReferenceNum2RecommenderScore8",
  id: "exampleId",
};

const service = {
  createSlateRecommend2() {
    return CREATE_RESULT;
  },
  slateRecommend2s: () => FIND_MANY_RESULT,
  slateRecommend2: ({ where }: { where: { id: string } }) => {
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

describe("SlateRecommend2", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateRecommend2Service,
          useValue: service,
        },
      ],
      controllers: [SlateRecommend2Controller],
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

  test("POST /slateRecommend2s", async () => {
    await request(app.getHttpServer())
      .post("/slateRecommend2s")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateRecommend2s", async () => {
    await request(app.getHttpServer())
      .get("/slateRecommend2s")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateRecommend2s/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateRecommend2s"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateRecommend2s/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateRecommend2s"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateRecommend2s existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateRecommend2s")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateRecommend2s")
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
