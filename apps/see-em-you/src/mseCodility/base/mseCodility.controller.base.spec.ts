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
import { MseCodilityController } from "../mseCodility.controller";
import { MseCodilityService } from "../mseCodility.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  academicDegree: "exampleAcademicDegree",
  closeDate: "exampleCloseDate",
  createDate: "exampleCreateDate",
  email: "exampleEmail",
  fieldOfStudy: "exampleFieldOfStudy",
  id: 42,
  ips: "exampleIps",
  lastName: "exampleLastName",
  lastSchoolAttended: "exampleLastSchoolAttended",
  maxScore: "exampleMaxScore",
  nick: "exampleNick",
  percentCorrectness: "examplePercentCorrectness",
  percentPerformance: "examplePercentPerformance",
  percentTotalScore: "examplePercentTotalScore",
  phone: "examplePhone",
  profileUrl: "exampleProfileUrl",
  programmingExperience: "exampleProgrammingExperience",
  similarityCheck: "exampleSimilarityCheck",
  startDate: "exampleStartDate",
  task1Correctness: "exampleTask1Correctness",
  task1Name: "exampleTask1Name",
  task1Performance: "exampleTask1Performance",
  task1Score: "exampleTask1Score",
  task2Correctness: "exampleTask2Correctness",
  task2Name: "exampleTask2Name",
  task2Performance: "exampleTask2Performance",
  task2Score: "exampleTask2Score",
  task3Correctness: "exampleTask3Correctness",
  task3Name: "exampleTask3Name",
  task3Performance: "exampleTask3Performance",
  task3Score: "exampleTask3Score",
  task4Correctness: "exampleTask4Correctness",
  task4Name: "exampleTask4Name",
  task4Performance: "exampleTask4Performance",
  task4Score: "exampleTask4Score",
  test: "exampleTest",
  testSessionId: "exampleTestSessionId",
  timeUsed: "exampleTimeUsed",
  totalScore: "exampleTotalScore",
};
const CREATE_RESULT = {
  academicDegree: "exampleAcademicDegree",
  closeDate: "exampleCloseDate",
  createDate: "exampleCreateDate",
  email: "exampleEmail",
  fieldOfStudy: "exampleFieldOfStudy",
  id: 42,
  ips: "exampleIps",
  lastName: "exampleLastName",
  lastSchoolAttended: "exampleLastSchoolAttended",
  maxScore: "exampleMaxScore",
  nick: "exampleNick",
  percentCorrectness: "examplePercentCorrectness",
  percentPerformance: "examplePercentPerformance",
  percentTotalScore: "examplePercentTotalScore",
  phone: "examplePhone",
  profileUrl: "exampleProfileUrl",
  programmingExperience: "exampleProgrammingExperience",
  similarityCheck: "exampleSimilarityCheck",
  startDate: "exampleStartDate",
  task1Correctness: "exampleTask1Correctness",
  task1Name: "exampleTask1Name",
  task1Performance: "exampleTask1Performance",
  task1Score: "exampleTask1Score",
  task2Correctness: "exampleTask2Correctness",
  task2Name: "exampleTask2Name",
  task2Performance: "exampleTask2Performance",
  task2Score: "exampleTask2Score",
  task3Correctness: "exampleTask3Correctness",
  task3Name: "exampleTask3Name",
  task3Performance: "exampleTask3Performance",
  task3Score: "exampleTask3Score",
  task4Correctness: "exampleTask4Correctness",
  task4Name: "exampleTask4Name",
  task4Performance: "exampleTask4Performance",
  task4Score: "exampleTask4Score",
  test: "exampleTest",
  testSessionId: "exampleTestSessionId",
  timeUsed: "exampleTimeUsed",
  totalScore: "exampleTotalScore",
};
const FIND_MANY_RESULT = [
  {
    academicDegree: "exampleAcademicDegree",
    closeDate: "exampleCloseDate",
    createDate: "exampleCreateDate",
    email: "exampleEmail",
    fieldOfStudy: "exampleFieldOfStudy",
    id: 42,
    ips: "exampleIps",
    lastName: "exampleLastName",
    lastSchoolAttended: "exampleLastSchoolAttended",
    maxScore: "exampleMaxScore",
    nick: "exampleNick",
    percentCorrectness: "examplePercentCorrectness",
    percentPerformance: "examplePercentPerformance",
    percentTotalScore: "examplePercentTotalScore",
    phone: "examplePhone",
    profileUrl: "exampleProfileUrl",
    programmingExperience: "exampleProgrammingExperience",
    similarityCheck: "exampleSimilarityCheck",
    startDate: "exampleStartDate",
    task1Correctness: "exampleTask1Correctness",
    task1Name: "exampleTask1Name",
    task1Performance: "exampleTask1Performance",
    task1Score: "exampleTask1Score",
    task2Correctness: "exampleTask2Correctness",
    task2Name: "exampleTask2Name",
    task2Performance: "exampleTask2Performance",
    task2Score: "exampleTask2Score",
    task3Correctness: "exampleTask3Correctness",
    task3Name: "exampleTask3Name",
    task3Performance: "exampleTask3Performance",
    task3Score: "exampleTask3Score",
    task4Correctness: "exampleTask4Correctness",
    task4Name: "exampleTask4Name",
    task4Performance: "exampleTask4Performance",
    task4Score: "exampleTask4Score",
    test: "exampleTest",
    testSessionId: "exampleTestSessionId",
    timeUsed: "exampleTimeUsed",
    totalScore: "exampleTotalScore",
  },
];
const FIND_ONE_RESULT = {
  academicDegree: "exampleAcademicDegree",
  closeDate: "exampleCloseDate",
  createDate: "exampleCreateDate",
  email: "exampleEmail",
  fieldOfStudy: "exampleFieldOfStudy",
  id: 42,
  ips: "exampleIps",
  lastName: "exampleLastName",
  lastSchoolAttended: "exampleLastSchoolAttended",
  maxScore: "exampleMaxScore",
  nick: "exampleNick",
  percentCorrectness: "examplePercentCorrectness",
  percentPerformance: "examplePercentPerformance",
  percentTotalScore: "examplePercentTotalScore",
  phone: "examplePhone",
  profileUrl: "exampleProfileUrl",
  programmingExperience: "exampleProgrammingExperience",
  similarityCheck: "exampleSimilarityCheck",
  startDate: "exampleStartDate",
  task1Correctness: "exampleTask1Correctness",
  task1Name: "exampleTask1Name",
  task1Performance: "exampleTask1Performance",
  task1Score: "exampleTask1Score",
  task2Correctness: "exampleTask2Correctness",
  task2Name: "exampleTask2Name",
  task2Performance: "exampleTask2Performance",
  task2Score: "exampleTask2Score",
  task3Correctness: "exampleTask3Correctness",
  task3Name: "exampleTask3Name",
  task3Performance: "exampleTask3Performance",
  task3Score: "exampleTask3Score",
  task4Correctness: "exampleTask4Correctness",
  task4Name: "exampleTask4Name",
  task4Performance: "exampleTask4Performance",
  task4Score: "exampleTask4Score",
  test: "exampleTest",
  testSessionId: "exampleTestSessionId",
  timeUsed: "exampleTimeUsed",
  totalScore: "exampleTotalScore",
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

describe("MseCodility", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MseCodilityService,
          useValue: service,
        },
      ],
      controllers: [MseCodilityController],
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

  test("POST /mseCodilities", async () => {
    await request(app.getHttpServer())
      .post("/mseCodilities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mseCodilities", async () => {
    await request(app.getHttpServer())
      .get("/mseCodilities")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mseCodilities/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mseCodilities"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mseCodilities/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mseCodilities"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mseCodilities existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mseCodilities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mseCodilities")
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
