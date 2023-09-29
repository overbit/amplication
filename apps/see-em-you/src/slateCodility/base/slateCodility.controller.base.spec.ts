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
import { SlateCodilityController } from "../slateCodility.controller";
import { SlateCodilityService } from "../slateCodility.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  codilityCloseDate: "exampleCodilityCloseDate",
  codilityCreateDate: "exampleCodilityCreateDate",
  codilityIpAddresses: "exampleCodilityIpAddresses",
  codilityMaxScore: "exampleCodilityMaxScore",
  codilityPercentCorrectness: "exampleCodilityPercentCorrectness",
  codilityPercentPerformance: "exampleCodilityPercentPerformance",
  codilityPercentTotalScore: "exampleCodilityPercentTotalScore",
  codilityScore: "exampleCodilityScore",
  codilitySimilarity: "exampleCodilitySimilarity",
  codilityStartDate: "exampleCodilityStartDate",
  codilityTask1Correctness: "exampleCodilityTask1Correctness",
  codilityTask1Difficulty: "exampleCodilityTask1Difficulty",
  codilityTask1Language: "exampleCodilityTask1Language",
  codilityTask1Name: "exampleCodilityTask1Name",
  codilityTask1Performance: "exampleCodilityTask1Performance",
  codilityTask1Score: "exampleCodilityTask1Score",
  codilityTask2Correctness: "exampleCodilityTask2Correctness",
  codilityTask2Difficulty: "exampleCodilityTask2Difficulty",
  codilityTask2Language: "exampleCodilityTask2Language",
  codilityTask2Name: "exampleCodilityTask2Name",
  codilityTask2Performance: "exampleCodilityTask2Performance",
  codilityTask2Score: "exampleCodilityTask2Score",
  codilityTask3Correctness: "exampleCodilityTask3Correctness",
  codilityTask3Difficulty: "exampleCodilityTask3Difficulty",
  codilityTask3Language: "exampleCodilityTask3Language",
  codilityTask3Name: "exampleCodilityTask3Name",
  codilityTask3Performance: "exampleCodilityTask3Performance",
  codilityTask3Score: "exampleCodilityTask3Score",
  codilityTask4Correctness: "exampleCodilityTask4Correctness",
  codilityTask4Difficulty: "exampleCodilityTask4Difficulty",
  codilityTask4Language: "exampleCodilityTask4Language",
  codilityTask4Name: "exampleCodilityTask4Name",
  codilityTask4Performance: "exampleCodilityTask4Performance",
  codilityTask4Score: "exampleCodilityTask4Score",
  codilityTestName: "exampleCodilityTestName",
  codilityTestSession: "exampleCodilityTestSession",
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
};
const CREATE_RESULT = {
  codilityCloseDate: "exampleCodilityCloseDate",
  codilityCreateDate: "exampleCodilityCreateDate",
  codilityIpAddresses: "exampleCodilityIpAddresses",
  codilityMaxScore: "exampleCodilityMaxScore",
  codilityPercentCorrectness: "exampleCodilityPercentCorrectness",
  codilityPercentPerformance: "exampleCodilityPercentPerformance",
  codilityPercentTotalScore: "exampleCodilityPercentTotalScore",
  codilityScore: "exampleCodilityScore",
  codilitySimilarity: "exampleCodilitySimilarity",
  codilityStartDate: "exampleCodilityStartDate",
  codilityTask1Correctness: "exampleCodilityTask1Correctness",
  codilityTask1Difficulty: "exampleCodilityTask1Difficulty",
  codilityTask1Language: "exampleCodilityTask1Language",
  codilityTask1Name: "exampleCodilityTask1Name",
  codilityTask1Performance: "exampleCodilityTask1Performance",
  codilityTask1Score: "exampleCodilityTask1Score",
  codilityTask2Correctness: "exampleCodilityTask2Correctness",
  codilityTask2Difficulty: "exampleCodilityTask2Difficulty",
  codilityTask2Language: "exampleCodilityTask2Language",
  codilityTask2Name: "exampleCodilityTask2Name",
  codilityTask2Performance: "exampleCodilityTask2Performance",
  codilityTask2Score: "exampleCodilityTask2Score",
  codilityTask3Correctness: "exampleCodilityTask3Correctness",
  codilityTask3Difficulty: "exampleCodilityTask3Difficulty",
  codilityTask3Language: "exampleCodilityTask3Language",
  codilityTask3Name: "exampleCodilityTask3Name",
  codilityTask3Performance: "exampleCodilityTask3Performance",
  codilityTask3Score: "exampleCodilityTask3Score",
  codilityTask4Correctness: "exampleCodilityTask4Correctness",
  codilityTask4Difficulty: "exampleCodilityTask4Difficulty",
  codilityTask4Language: "exampleCodilityTask4Language",
  codilityTask4Name: "exampleCodilityTask4Name",
  codilityTask4Performance: "exampleCodilityTask4Performance",
  codilityTask4Score: "exampleCodilityTask4Score",
  codilityTestName: "exampleCodilityTestName",
  codilityTestSession: "exampleCodilityTestSession",
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
};
const FIND_MANY_RESULT = [
  {
    codilityCloseDate: "exampleCodilityCloseDate",
    codilityCreateDate: "exampleCodilityCreateDate",
    codilityIpAddresses: "exampleCodilityIpAddresses",
    codilityMaxScore: "exampleCodilityMaxScore",
    codilityPercentCorrectness: "exampleCodilityPercentCorrectness",
    codilityPercentPerformance: "exampleCodilityPercentPerformance",
    codilityPercentTotalScore: "exampleCodilityPercentTotalScore",
    codilityScore: "exampleCodilityScore",
    codilitySimilarity: "exampleCodilitySimilarity",
    codilityStartDate: "exampleCodilityStartDate",
    codilityTask1Correctness: "exampleCodilityTask1Correctness",
    codilityTask1Difficulty: "exampleCodilityTask1Difficulty",
    codilityTask1Language: "exampleCodilityTask1Language",
    codilityTask1Name: "exampleCodilityTask1Name",
    codilityTask1Performance: "exampleCodilityTask1Performance",
    codilityTask1Score: "exampleCodilityTask1Score",
    codilityTask2Correctness: "exampleCodilityTask2Correctness",
    codilityTask2Difficulty: "exampleCodilityTask2Difficulty",
    codilityTask2Language: "exampleCodilityTask2Language",
    codilityTask2Name: "exampleCodilityTask2Name",
    codilityTask2Performance: "exampleCodilityTask2Performance",
    codilityTask2Score: "exampleCodilityTask2Score",
    codilityTask3Correctness: "exampleCodilityTask3Correctness",
    codilityTask3Difficulty: "exampleCodilityTask3Difficulty",
    codilityTask3Language: "exampleCodilityTask3Language",
    codilityTask3Name: "exampleCodilityTask3Name",
    codilityTask3Performance: "exampleCodilityTask3Performance",
    codilityTask3Score: "exampleCodilityTask3Score",
    codilityTask4Correctness: "exampleCodilityTask4Correctness",
    codilityTask4Difficulty: "exampleCodilityTask4Difficulty",
    codilityTask4Language: "exampleCodilityTask4Language",
    codilityTask4Name: "exampleCodilityTask4Name",
    codilityTask4Performance: "exampleCodilityTask4Performance",
    codilityTask4Score: "exampleCodilityTask4Score",
    codilityTestName: "exampleCodilityTestName",
    codilityTestSession: "exampleCodilityTestSession",
    first: "exampleFirst",
    id: "exampleId",
    last: "exampleLast",
    middle: "exampleMiddle",
    prefix: "examplePrefix",
  },
];
const FIND_ONE_RESULT = {
  codilityCloseDate: "exampleCodilityCloseDate",
  codilityCreateDate: "exampleCodilityCreateDate",
  codilityIpAddresses: "exampleCodilityIpAddresses",
  codilityMaxScore: "exampleCodilityMaxScore",
  codilityPercentCorrectness: "exampleCodilityPercentCorrectness",
  codilityPercentPerformance: "exampleCodilityPercentPerformance",
  codilityPercentTotalScore: "exampleCodilityPercentTotalScore",
  codilityScore: "exampleCodilityScore",
  codilitySimilarity: "exampleCodilitySimilarity",
  codilityStartDate: "exampleCodilityStartDate",
  codilityTask1Correctness: "exampleCodilityTask1Correctness",
  codilityTask1Difficulty: "exampleCodilityTask1Difficulty",
  codilityTask1Language: "exampleCodilityTask1Language",
  codilityTask1Name: "exampleCodilityTask1Name",
  codilityTask1Performance: "exampleCodilityTask1Performance",
  codilityTask1Score: "exampleCodilityTask1Score",
  codilityTask2Correctness: "exampleCodilityTask2Correctness",
  codilityTask2Difficulty: "exampleCodilityTask2Difficulty",
  codilityTask2Language: "exampleCodilityTask2Language",
  codilityTask2Name: "exampleCodilityTask2Name",
  codilityTask2Performance: "exampleCodilityTask2Performance",
  codilityTask2Score: "exampleCodilityTask2Score",
  codilityTask3Correctness: "exampleCodilityTask3Correctness",
  codilityTask3Difficulty: "exampleCodilityTask3Difficulty",
  codilityTask3Language: "exampleCodilityTask3Language",
  codilityTask3Name: "exampleCodilityTask3Name",
  codilityTask3Performance: "exampleCodilityTask3Performance",
  codilityTask3Score: "exampleCodilityTask3Score",
  codilityTask4Correctness: "exampleCodilityTask4Correctness",
  codilityTask4Difficulty: "exampleCodilityTask4Difficulty",
  codilityTask4Language: "exampleCodilityTask4Language",
  codilityTask4Name: "exampleCodilityTask4Name",
  codilityTask4Performance: "exampleCodilityTask4Performance",
  codilityTask4Score: "exampleCodilityTask4Score",
  codilityTestName: "exampleCodilityTestName",
  codilityTestSession: "exampleCodilityTestSession",
  first: "exampleFirst",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
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

describe("SlateCodility", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateCodilityService,
          useValue: service,
        },
      ],
      controllers: [SlateCodilityController],
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

  test("POST /slateCodilities", async () => {
    await request(app.getHttpServer())
      .post("/slateCodilities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateCodilities", async () => {
    await request(app.getHttpServer())
      .get("/slateCodilities")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateCodilities/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateCodilities"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateCodilities/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateCodilities"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateCodilities existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateCodilities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateCodilities")
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
