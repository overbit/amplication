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
import { SlateRecommend3Controller } from "../slateRecommend3.controller";
import { SlateRecommend3Service } from "../slateRecommend3.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  reference3Email: "exampleReference3Email",
  reference3First: "exampleReference3First",
  reference3Industry: "exampleReference3Industry",
  reference3Last: "exampleReference3Last",
  reference3Organization: "exampleReference3Organization",
  reference3Phone: "exampleReference3Phone",
  reference3Submitted: "exampleReference3Submitted",
  reference3Title: "exampleReference3Title",
  reference3Type: "exampleReference3Type",
  referenceNum3IsrmsRecommenderScore1:
    "exampleReferenceNum3IsrmsRecommenderScore1",
  referenceNum3IsrmsRecommenderScore10:
    "exampleReferenceNum3IsrmsRecommenderScore10",
  referenceNum3IsrmsRecommenderScore11:
    "exampleReferenceNum3IsrmsRecommenderScore11",
  referenceNum3IsrmsRecommenderScore12:
    "exampleReferenceNum3IsrmsRecommenderScore12",
  referenceNum3IsrmsRecommenderScore13:
    "exampleReferenceNum3IsrmsRecommenderScore13",
  referenceNum3IsrmsRecommenderScore14:
    "exampleReferenceNum3IsrmsRecommenderScore14",
  referenceNum3IsrmsRecommenderScore15:
    "exampleReferenceNum3IsrmsRecommenderScore15",
  referenceNum3IsrmsRecommenderScore2:
    "exampleReferenceNum3IsrmsRecommenderScore2",
  referenceNum3IsrmsRecommenderScore3:
    "exampleReferenceNum3IsrmsRecommenderScore3",
  referenceNum3IsrmsRecommenderScore4:
    "exampleReferenceNum3IsrmsRecommenderScore4",
  referenceNum3IsrmsRecommenderScore5:
    "exampleReferenceNum3IsrmsRecommenderScore5",
  referenceNum3IsrmsRecommenderScore6:
    "exampleReferenceNum3IsrmsRecommenderScore6",
  referenceNum3IsrmsRecommenderScore7:
    "exampleReferenceNum3IsrmsRecommenderScore7",
  referenceNum3IsrmsRecommenderScore8:
    "exampleReferenceNum3IsrmsRecommenderScore8",
  referenceNum3IsrmsRecommenderScore9:
    "exampleReferenceNum3IsrmsRecommenderScore9",
  referenceNum3MseRecommendationAdditional:
    "exampleReferenceNum3MseRecommendationAdditional",
  referenceNum3MseRecommendationComparison:
    "exampleReferenceNum3MseRecommendationComparison",
  referenceNum3MseRecommendationHowKnown:
    "exampleReferenceNum3MseRecommendationHowKnown",
  referenceNum3MseRecommendationProjectPerformance:
    "exampleReferenceNum3MseRecommendationProjectPerformance",
  referenceNum3MseRecommendationStrengthsWeakness:
    "exampleReferenceNum3MseRecommendationStrengthsWeakness",
  referenceNum3RecommenderScore1: "exampleReferenceNum3RecommenderScore1",
  referenceNum3RecommenderScore2: "exampleReferenceNum3RecommenderScore2",
  referenceNum3RecommenderScore3: "exampleReferenceNum3RecommenderScore3",
  referenceNum3RecommenderScore4: "exampleReferenceNum3RecommenderScore4",
  referenceNum3RecommenderScore5: "exampleReferenceNum3RecommenderScore5",
  referenceNum3RecommenderScore6: "exampleReferenceNum3RecommenderScore6",
  referenceNum3RecommenderScore7: "exampleReferenceNum3RecommenderScore7",
  referenceNum3RecommenderScore8: "exampleReferenceNum3RecommenderScore8",
};
const CREATE_RESULT = {
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  reference3Email: "exampleReference3Email",
  reference3First: "exampleReference3First",
  reference3Industry: "exampleReference3Industry",
  reference3Last: "exampleReference3Last",
  reference3Organization: "exampleReference3Organization",
  reference3Phone: "exampleReference3Phone",
  reference3Submitted: "exampleReference3Submitted",
  reference3Title: "exampleReference3Title",
  reference3Type: "exampleReference3Type",
  referenceNum3IsrmsRecommenderScore1:
    "exampleReferenceNum3IsrmsRecommenderScore1",
  referenceNum3IsrmsRecommenderScore10:
    "exampleReferenceNum3IsrmsRecommenderScore10",
  referenceNum3IsrmsRecommenderScore11:
    "exampleReferenceNum3IsrmsRecommenderScore11",
  referenceNum3IsrmsRecommenderScore12:
    "exampleReferenceNum3IsrmsRecommenderScore12",
  referenceNum3IsrmsRecommenderScore13:
    "exampleReferenceNum3IsrmsRecommenderScore13",
  referenceNum3IsrmsRecommenderScore14:
    "exampleReferenceNum3IsrmsRecommenderScore14",
  referenceNum3IsrmsRecommenderScore15:
    "exampleReferenceNum3IsrmsRecommenderScore15",
  referenceNum3IsrmsRecommenderScore2:
    "exampleReferenceNum3IsrmsRecommenderScore2",
  referenceNum3IsrmsRecommenderScore3:
    "exampleReferenceNum3IsrmsRecommenderScore3",
  referenceNum3IsrmsRecommenderScore4:
    "exampleReferenceNum3IsrmsRecommenderScore4",
  referenceNum3IsrmsRecommenderScore5:
    "exampleReferenceNum3IsrmsRecommenderScore5",
  referenceNum3IsrmsRecommenderScore6:
    "exampleReferenceNum3IsrmsRecommenderScore6",
  referenceNum3IsrmsRecommenderScore7:
    "exampleReferenceNum3IsrmsRecommenderScore7",
  referenceNum3IsrmsRecommenderScore8:
    "exampleReferenceNum3IsrmsRecommenderScore8",
  referenceNum3IsrmsRecommenderScore9:
    "exampleReferenceNum3IsrmsRecommenderScore9",
  referenceNum3MseRecommendationAdditional:
    "exampleReferenceNum3MseRecommendationAdditional",
  referenceNum3MseRecommendationComparison:
    "exampleReferenceNum3MseRecommendationComparison",
  referenceNum3MseRecommendationHowKnown:
    "exampleReferenceNum3MseRecommendationHowKnown",
  referenceNum3MseRecommendationProjectPerformance:
    "exampleReferenceNum3MseRecommendationProjectPerformance",
  referenceNum3MseRecommendationStrengthsWeakness:
    "exampleReferenceNum3MseRecommendationStrengthsWeakness",
  referenceNum3RecommenderScore1: "exampleReferenceNum3RecommenderScore1",
  referenceNum3RecommenderScore2: "exampleReferenceNum3RecommenderScore2",
  referenceNum3RecommenderScore3: "exampleReferenceNum3RecommenderScore3",
  referenceNum3RecommenderScore4: "exampleReferenceNum3RecommenderScore4",
  referenceNum3RecommenderScore5: "exampleReferenceNum3RecommenderScore5",
  referenceNum3RecommenderScore6: "exampleReferenceNum3RecommenderScore6",
  referenceNum3RecommenderScore7: "exampleReferenceNum3RecommenderScore7",
  referenceNum3RecommenderScore8: "exampleReferenceNum3RecommenderScore8",
};
const FIND_MANY_RESULT = [
  {
    first: "exampleFirst",
    id: "exampleId",
    last: "exampleLast",
    middle: "exampleMiddle",
    prefix: "examplePrefix",
    reference3Email: "exampleReference3Email",
    reference3First: "exampleReference3First",
    reference3Industry: "exampleReference3Industry",
    reference3Last: "exampleReference3Last",
    reference3Organization: "exampleReference3Organization",
    reference3Phone: "exampleReference3Phone",
    reference3Submitted: "exampleReference3Submitted",
    reference3Title: "exampleReference3Title",
    reference3Type: "exampleReference3Type",
    referenceNum3IsrmsRecommenderScore1:
      "exampleReferenceNum3IsrmsRecommenderScore1",
    referenceNum3IsrmsRecommenderScore10:
      "exampleReferenceNum3IsrmsRecommenderScore10",
    referenceNum3IsrmsRecommenderScore11:
      "exampleReferenceNum3IsrmsRecommenderScore11",
    referenceNum3IsrmsRecommenderScore12:
      "exampleReferenceNum3IsrmsRecommenderScore12",
    referenceNum3IsrmsRecommenderScore13:
      "exampleReferenceNum3IsrmsRecommenderScore13",
    referenceNum3IsrmsRecommenderScore14:
      "exampleReferenceNum3IsrmsRecommenderScore14",
    referenceNum3IsrmsRecommenderScore15:
      "exampleReferenceNum3IsrmsRecommenderScore15",
    referenceNum3IsrmsRecommenderScore2:
      "exampleReferenceNum3IsrmsRecommenderScore2",
    referenceNum3IsrmsRecommenderScore3:
      "exampleReferenceNum3IsrmsRecommenderScore3",
    referenceNum3IsrmsRecommenderScore4:
      "exampleReferenceNum3IsrmsRecommenderScore4",
    referenceNum3IsrmsRecommenderScore5:
      "exampleReferenceNum3IsrmsRecommenderScore5",
    referenceNum3IsrmsRecommenderScore6:
      "exampleReferenceNum3IsrmsRecommenderScore6",
    referenceNum3IsrmsRecommenderScore7:
      "exampleReferenceNum3IsrmsRecommenderScore7",
    referenceNum3IsrmsRecommenderScore8:
      "exampleReferenceNum3IsrmsRecommenderScore8",
    referenceNum3IsrmsRecommenderScore9:
      "exampleReferenceNum3IsrmsRecommenderScore9",
    referenceNum3MseRecommendationAdditional:
      "exampleReferenceNum3MseRecommendationAdditional",
    referenceNum3MseRecommendationComparison:
      "exampleReferenceNum3MseRecommendationComparison",
    referenceNum3MseRecommendationHowKnown:
      "exampleReferenceNum3MseRecommendationHowKnown",
    referenceNum3MseRecommendationProjectPerformance:
      "exampleReferenceNum3MseRecommendationProjectPerformance",
    referenceNum3MseRecommendationStrengthsWeakness:
      "exampleReferenceNum3MseRecommendationStrengthsWeakness",
    referenceNum3RecommenderScore1: "exampleReferenceNum3RecommenderScore1",
    referenceNum3RecommenderScore2: "exampleReferenceNum3RecommenderScore2",
    referenceNum3RecommenderScore3: "exampleReferenceNum3RecommenderScore3",
    referenceNum3RecommenderScore4: "exampleReferenceNum3RecommenderScore4",
    referenceNum3RecommenderScore5: "exampleReferenceNum3RecommenderScore5",
    referenceNum3RecommenderScore6: "exampleReferenceNum3RecommenderScore6",
    referenceNum3RecommenderScore7: "exampleReferenceNum3RecommenderScore7",
    referenceNum3RecommenderScore8: "exampleReferenceNum3RecommenderScore8",
  },
];
const FIND_ONE_RESULT = {
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  reference3Email: "exampleReference3Email",
  reference3First: "exampleReference3First",
  reference3Industry: "exampleReference3Industry",
  reference3Last: "exampleReference3Last",
  reference3Organization: "exampleReference3Organization",
  reference3Phone: "exampleReference3Phone",
  reference3Submitted: "exampleReference3Submitted",
  reference3Title: "exampleReference3Title",
  reference3Type: "exampleReference3Type",
  referenceNum3IsrmsRecommenderScore1:
    "exampleReferenceNum3IsrmsRecommenderScore1",
  referenceNum3IsrmsRecommenderScore10:
    "exampleReferenceNum3IsrmsRecommenderScore10",
  referenceNum3IsrmsRecommenderScore11:
    "exampleReferenceNum3IsrmsRecommenderScore11",
  referenceNum3IsrmsRecommenderScore12:
    "exampleReferenceNum3IsrmsRecommenderScore12",
  referenceNum3IsrmsRecommenderScore13:
    "exampleReferenceNum3IsrmsRecommenderScore13",
  referenceNum3IsrmsRecommenderScore14:
    "exampleReferenceNum3IsrmsRecommenderScore14",
  referenceNum3IsrmsRecommenderScore15:
    "exampleReferenceNum3IsrmsRecommenderScore15",
  referenceNum3IsrmsRecommenderScore2:
    "exampleReferenceNum3IsrmsRecommenderScore2",
  referenceNum3IsrmsRecommenderScore3:
    "exampleReferenceNum3IsrmsRecommenderScore3",
  referenceNum3IsrmsRecommenderScore4:
    "exampleReferenceNum3IsrmsRecommenderScore4",
  referenceNum3IsrmsRecommenderScore5:
    "exampleReferenceNum3IsrmsRecommenderScore5",
  referenceNum3IsrmsRecommenderScore6:
    "exampleReferenceNum3IsrmsRecommenderScore6",
  referenceNum3IsrmsRecommenderScore7:
    "exampleReferenceNum3IsrmsRecommenderScore7",
  referenceNum3IsrmsRecommenderScore8:
    "exampleReferenceNum3IsrmsRecommenderScore8",
  referenceNum3IsrmsRecommenderScore9:
    "exampleReferenceNum3IsrmsRecommenderScore9",
  referenceNum3MseRecommendationAdditional:
    "exampleReferenceNum3MseRecommendationAdditional",
  referenceNum3MseRecommendationComparison:
    "exampleReferenceNum3MseRecommendationComparison",
  referenceNum3MseRecommendationHowKnown:
    "exampleReferenceNum3MseRecommendationHowKnown",
  referenceNum3MseRecommendationProjectPerformance:
    "exampleReferenceNum3MseRecommendationProjectPerformance",
  referenceNum3MseRecommendationStrengthsWeakness:
    "exampleReferenceNum3MseRecommendationStrengthsWeakness",
  referenceNum3RecommenderScore1: "exampleReferenceNum3RecommenderScore1",
  referenceNum3RecommenderScore2: "exampleReferenceNum3RecommenderScore2",
  referenceNum3RecommenderScore3: "exampleReferenceNum3RecommenderScore3",
  referenceNum3RecommenderScore4: "exampleReferenceNum3RecommenderScore4",
  referenceNum3RecommenderScore5: "exampleReferenceNum3RecommenderScore5",
  referenceNum3RecommenderScore6: "exampleReferenceNum3RecommenderScore6",
  referenceNum3RecommenderScore7: "exampleReferenceNum3RecommenderScore7",
  referenceNum3RecommenderScore8: "exampleReferenceNum3RecommenderScore8",
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

describe("SlateRecommend3", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateRecommend3Service,
          useValue: service,
        },
      ],
      controllers: [SlateRecommend3Controller],
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

  test("POST /slateRecommend3s", async () => {
    await request(app.getHttpServer())
      .post("/slateRecommend3s")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateRecommend3s", async () => {
    await request(app.getHttpServer())
      .get("/slateRecommend3s")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateRecommend3s/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateRecommend3s"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateRecommend3s/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateRecommend3s"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateRecommend3s existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateRecommend3s")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateRecommend3s")
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
