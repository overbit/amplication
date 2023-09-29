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
import { MitsSlateRecommend2Controller } from "../mitsSlateRecommend2.controller";
import { MitsSlateRecommend2Service } from "../mitsSlateRecommend2.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  reference2Email: "exampleReference2Email",
  reference2First: "exampleReference2First",
  reference2Industry: "exampleReference2Industry",
  reference2Last: "exampleReference2Last",
  reference2Organization: "exampleReference2Organization",
  reference2Phone: "exampleReference2Phone",
  reference2Submitted: "exampleReference2Submitted",
  reference2Title: "exampleReference2Title",
  reference2Type: "exampleReference2Type",
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
};
const CREATE_RESULT = {
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  reference2Email: "exampleReference2Email",
  reference2First: "exampleReference2First",
  reference2Industry: "exampleReference2Industry",
  reference2Last: "exampleReference2Last",
  reference2Organization: "exampleReference2Organization",
  reference2Phone: "exampleReference2Phone",
  reference2Submitted: "exampleReference2Submitted",
  reference2Title: "exampleReference2Title",
  reference2Type: "exampleReference2Type",
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
};
const FIND_MANY_RESULT = [
  {
    first: "exampleFirst",
    id: "exampleId",
    last: "exampleLast",
    middle: "exampleMiddle",
    prefix: "examplePrefix",
    reference2Email: "exampleReference2Email",
    reference2First: "exampleReference2First",
    reference2Industry: "exampleReference2Industry",
    reference2Last: "exampleReference2Last",
    reference2Organization: "exampleReference2Organization",
    reference2Phone: "exampleReference2Phone",
    reference2Submitted: "exampleReference2Submitted",
    reference2Title: "exampleReference2Title",
    reference2Type: "exampleReference2Type",
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
  },
];
const FIND_ONE_RESULT = {
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  reference2Email: "exampleReference2Email",
  reference2First: "exampleReference2First",
  reference2Industry: "exampleReference2Industry",
  reference2Last: "exampleReference2Last",
  reference2Organization: "exampleReference2Organization",
  reference2Phone: "exampleReference2Phone",
  reference2Submitted: "exampleReference2Submitted",
  reference2Title: "exampleReference2Title",
  reference2Type: "exampleReference2Type",
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

describe("MitsSlateRecommend2", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MitsSlateRecommend2Service,
          useValue: service,
        },
      ],
      controllers: [MitsSlateRecommend2Controller],
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

  test("POST /mitsSlateRecommend2s", async () => {
    await request(app.getHttpServer())
      .post("/mitsSlateRecommend2s")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mitsSlateRecommend2s", async () => {
    await request(app.getHttpServer())
      .get("/mitsSlateRecommend2s")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mitsSlateRecommend2s/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mitsSlateRecommend2s"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mitsSlateRecommend2s/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mitsSlateRecommend2s"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mitsSlateRecommend2s existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mitsSlateRecommend2s")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mitsSlateRecommend2s")
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
