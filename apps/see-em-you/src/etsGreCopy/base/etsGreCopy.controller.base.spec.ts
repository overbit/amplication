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
import { EtsGreCopyController } from "../etsGreCopy.controller";
import { EtsGreCopyService } from "../etsGreCopy.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  addressZip: "exampleAddressZip",
  countryCode: "exampleCountryCode",
  countryName: "exampleCountryName",
  createdDate: new Date(),
  cycleNum: "exampleCycleNum",
  deptCode: "exampleDeptCode",
  deptName: "exampleDeptName",
  dob: "exampleDob",
  email: "exampleEmail",
  fName: "exampleFName",
  gender: "exampleGender",
  gradMajorCode: "exampleGradMajorCode",
  gradMajorName: "exampleGradMajorName",
  id: 42,
  instCode: "exampleInstCode",
  instName: "exampleInstName",
  instType: "exampleInstType",
  lName: "exampleLName",
  mName: "exampleMName",
  percentileRank1: "examplePercentileRank1",
  percentileRank2: "examplePercentileRank2",
  percentileRank3: "examplePercentileRank3",
  percentileRank4: "examplePercentileRank4",
  percentileRank5: "examplePercentileRank5",
  percentileRank6: "examplePercentileRank6",
  percentileRank7: "examplePercentileRank7",
  phone: "examplePhone",
  processDate: "exampleProcessDate",
  recordSerialNum: "exampleRecordSerialNum",
  regNumber: "exampleRegNumber",
  scaledScore1: "exampleScaledScore1",
  scaledScore2: "exampleScaledScore2",
  scaledScore3: "exampleScaledScore3",
  scaledScore4: "exampleScaledScore4",
  scaledScore5: "exampleScaledScore5",
  scaledScore6: "exampleScaledScore6",
  scaledScore7: "exampleScaledScore7",
  scoreType1: "exampleScoreType1",
  scoreType2: "exampleScoreType2",
  scoreType3: "exampleScoreType3",
  scoreType4: "exampleScoreType4",
  scoreType5: "exampleScoreType5",
  scoreType6: "exampleScoreType6",
  scoreType7: "exampleScoreType7",
  sequenceNum: "exampleSequenceNum",
  ssn: "exampleSsn",
  testCode: "exampleTestCode",
  testDate: "exampleTestDate",
  testName: "exampleTestName",
};
const CREATE_RESULT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  addressZip: "exampleAddressZip",
  countryCode: "exampleCountryCode",
  countryName: "exampleCountryName",
  createdDate: new Date(),
  cycleNum: "exampleCycleNum",
  deptCode: "exampleDeptCode",
  deptName: "exampleDeptName",
  dob: "exampleDob",
  email: "exampleEmail",
  fName: "exampleFName",
  gender: "exampleGender",
  gradMajorCode: "exampleGradMajorCode",
  gradMajorName: "exampleGradMajorName",
  id: 42,
  instCode: "exampleInstCode",
  instName: "exampleInstName",
  instType: "exampleInstType",
  lName: "exampleLName",
  mName: "exampleMName",
  percentileRank1: "examplePercentileRank1",
  percentileRank2: "examplePercentileRank2",
  percentileRank3: "examplePercentileRank3",
  percentileRank4: "examplePercentileRank4",
  percentileRank5: "examplePercentileRank5",
  percentileRank6: "examplePercentileRank6",
  percentileRank7: "examplePercentileRank7",
  phone: "examplePhone",
  processDate: "exampleProcessDate",
  recordSerialNum: "exampleRecordSerialNum",
  regNumber: "exampleRegNumber",
  scaledScore1: "exampleScaledScore1",
  scaledScore2: "exampleScaledScore2",
  scaledScore3: "exampleScaledScore3",
  scaledScore4: "exampleScaledScore4",
  scaledScore5: "exampleScaledScore5",
  scaledScore6: "exampleScaledScore6",
  scaledScore7: "exampleScaledScore7",
  scoreType1: "exampleScoreType1",
  scoreType2: "exampleScoreType2",
  scoreType3: "exampleScoreType3",
  scoreType4: "exampleScoreType4",
  scoreType5: "exampleScoreType5",
  scoreType6: "exampleScoreType6",
  scoreType7: "exampleScoreType7",
  sequenceNum: "exampleSequenceNum",
  ssn: "exampleSsn",
  testCode: "exampleTestCode",
  testDate: "exampleTestDate",
  testName: "exampleTestName",
};
const FIND_MANY_RESULT = [
  {
    address1: "exampleAddress1",
    address2: "exampleAddress2",
    address3: "exampleAddress3",
    addressCity: "exampleAddressCity",
    addressState: "exampleAddressState",
    addressZip: "exampleAddressZip",
    countryCode: "exampleCountryCode",
    countryName: "exampleCountryName",
    createdDate: new Date(),
    cycleNum: "exampleCycleNum",
    deptCode: "exampleDeptCode",
    deptName: "exampleDeptName",
    dob: "exampleDob",
    email: "exampleEmail",
    fName: "exampleFName",
    gender: "exampleGender",
    gradMajorCode: "exampleGradMajorCode",
    gradMajorName: "exampleGradMajorName",
    id: 42,
    instCode: "exampleInstCode",
    instName: "exampleInstName",
    instType: "exampleInstType",
    lName: "exampleLName",
    mName: "exampleMName",
    percentileRank1: "examplePercentileRank1",
    percentileRank2: "examplePercentileRank2",
    percentileRank3: "examplePercentileRank3",
    percentileRank4: "examplePercentileRank4",
    percentileRank5: "examplePercentileRank5",
    percentileRank6: "examplePercentileRank6",
    percentileRank7: "examplePercentileRank7",
    phone: "examplePhone",
    processDate: "exampleProcessDate",
    recordSerialNum: "exampleRecordSerialNum",
    regNumber: "exampleRegNumber",
    scaledScore1: "exampleScaledScore1",
    scaledScore2: "exampleScaledScore2",
    scaledScore3: "exampleScaledScore3",
    scaledScore4: "exampleScaledScore4",
    scaledScore5: "exampleScaledScore5",
    scaledScore6: "exampleScaledScore6",
    scaledScore7: "exampleScaledScore7",
    scoreType1: "exampleScoreType1",
    scoreType2: "exampleScoreType2",
    scoreType3: "exampleScoreType3",
    scoreType4: "exampleScoreType4",
    scoreType5: "exampleScoreType5",
    scoreType6: "exampleScoreType6",
    scoreType7: "exampleScoreType7",
    sequenceNum: "exampleSequenceNum",
    ssn: "exampleSsn",
    testCode: "exampleTestCode",
    testDate: "exampleTestDate",
    testName: "exampleTestName",
  },
];
const FIND_ONE_RESULT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  addressZip: "exampleAddressZip",
  countryCode: "exampleCountryCode",
  countryName: "exampleCountryName",
  createdDate: new Date(),
  cycleNum: "exampleCycleNum",
  deptCode: "exampleDeptCode",
  deptName: "exampleDeptName",
  dob: "exampleDob",
  email: "exampleEmail",
  fName: "exampleFName",
  gender: "exampleGender",
  gradMajorCode: "exampleGradMajorCode",
  gradMajorName: "exampleGradMajorName",
  id: 42,
  instCode: "exampleInstCode",
  instName: "exampleInstName",
  instType: "exampleInstType",
  lName: "exampleLName",
  mName: "exampleMName",
  percentileRank1: "examplePercentileRank1",
  percentileRank2: "examplePercentileRank2",
  percentileRank3: "examplePercentileRank3",
  percentileRank4: "examplePercentileRank4",
  percentileRank5: "examplePercentileRank5",
  percentileRank6: "examplePercentileRank6",
  percentileRank7: "examplePercentileRank7",
  phone: "examplePhone",
  processDate: "exampleProcessDate",
  recordSerialNum: "exampleRecordSerialNum",
  regNumber: "exampleRegNumber",
  scaledScore1: "exampleScaledScore1",
  scaledScore2: "exampleScaledScore2",
  scaledScore3: "exampleScaledScore3",
  scaledScore4: "exampleScaledScore4",
  scaledScore5: "exampleScaledScore5",
  scaledScore6: "exampleScaledScore6",
  scaledScore7: "exampleScaledScore7",
  scoreType1: "exampleScoreType1",
  scoreType2: "exampleScoreType2",
  scoreType3: "exampleScoreType3",
  scoreType4: "exampleScoreType4",
  scoreType5: "exampleScoreType5",
  scoreType6: "exampleScoreType6",
  scoreType7: "exampleScoreType7",
  sequenceNum: "exampleSequenceNum",
  ssn: "exampleSsn",
  testCode: "exampleTestCode",
  testDate: "exampleTestDate",
  testName: "exampleTestName",
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

describe("EtsGreCopy", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EtsGreCopyService,
          useValue: service,
        },
      ],
      controllers: [EtsGreCopyController],
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

  test("POST /etsGreCopies", async () => {
    await request(app.getHttpServer())
      .post("/etsGreCopies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
      });
  });

  test("GET /etsGreCopies", async () => {
    await request(app.getHttpServer())
      .get("/etsGreCopies")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdDate: FIND_MANY_RESULT[0].createdDate.toISOString(),
        },
      ]);
  });

  test("GET /etsGreCopies/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/etsGreCopies"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /etsGreCopies/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/etsGreCopies"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdDate: FIND_ONE_RESULT.createdDate.toISOString(),
      });
  });

  test("POST /etsGreCopies existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/etsGreCopies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/etsGreCopies")
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
