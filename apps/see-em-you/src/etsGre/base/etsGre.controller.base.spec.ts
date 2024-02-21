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
import { EtsGreController } from "../etsGre.controller";
import { EtsGreService } from "../etsGre.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  instCode: "exampleInstCode",
  instName: "exampleInstName",
  instType: "exampleInstType",
  deptCode: "exampleDeptCode",
  deptName: "exampleDeptName",
  gradMajorCode: "exampleGradMajorCode",
  gradMajorName: "exampleGradMajorName",
  lName: "exampleLName",
  fName: "exampleFName",
  mName: "exampleMName",
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  addressZip: "exampleAddressZip",
  countryName: "exampleCountryName",
  countryCode: "exampleCountryCode",
  dob: "exampleDob",
  gender: "exampleGender",
  ssn: "exampleSsn",
  phone: "examplePhone",
  email: "exampleEmail",
  regNumber: "exampleRegNumber",
  testDate: "exampleTestDate",
  testCode: "exampleTestCode",
  testName: "exampleTestName",
  scoreType1: "exampleScoreType1",
  scaledScore1: "exampleScaledScore1",
  percentileRank1: "examplePercentileRank1",
  scoreType2: "exampleScoreType2",
  scaledScore2: "exampleScaledScore2",
  percentileRank2: "examplePercentileRank2",
  scoreType3: "exampleScoreType3",
  scaledScore3: "exampleScaledScore3",
  percentileRank3: "examplePercentileRank3",
  scoreType4: "exampleScoreType4",
  scaledScore4: "exampleScaledScore4",
  percentileRank4: "examplePercentileRank4",
  scoreType5: "exampleScoreType5",
  scaledScore5: "exampleScaledScore5",
  percentileRank5: "examplePercentileRank5",
  scoreType6: "exampleScoreType6",
  scaledScore6: "exampleScaledScore6",
  percentileRank6: "examplePercentileRank6",
  scoreType7: "exampleScoreType7",
  scaledScore7: "exampleScaledScore7",
  percentileRank7: "examplePercentileRank7",
  sequenceNum: "exampleSequenceNum",
  recordSerialNum: "exampleRecordSerialNum",
  cycleNum: "exampleCycleNum",
  processDate: "exampleProcessDate",
  createdDate: new Date(),
  id: 42,
};
const CREATE_RESULT = {
  instCode: "exampleInstCode",
  instName: "exampleInstName",
  instType: "exampleInstType",
  deptCode: "exampleDeptCode",
  deptName: "exampleDeptName",
  gradMajorCode: "exampleGradMajorCode",
  gradMajorName: "exampleGradMajorName",
  lName: "exampleLName",
  fName: "exampleFName",
  mName: "exampleMName",
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  addressZip: "exampleAddressZip",
  countryName: "exampleCountryName",
  countryCode: "exampleCountryCode",
  dob: "exampleDob",
  gender: "exampleGender",
  ssn: "exampleSsn",
  phone: "examplePhone",
  email: "exampleEmail",
  regNumber: "exampleRegNumber",
  testDate: "exampleTestDate",
  testCode: "exampleTestCode",
  testName: "exampleTestName",
  scoreType1: "exampleScoreType1",
  scaledScore1: "exampleScaledScore1",
  percentileRank1: "examplePercentileRank1",
  scoreType2: "exampleScoreType2",
  scaledScore2: "exampleScaledScore2",
  percentileRank2: "examplePercentileRank2",
  scoreType3: "exampleScoreType3",
  scaledScore3: "exampleScaledScore3",
  percentileRank3: "examplePercentileRank3",
  scoreType4: "exampleScoreType4",
  scaledScore4: "exampleScaledScore4",
  percentileRank4: "examplePercentileRank4",
  scoreType5: "exampleScoreType5",
  scaledScore5: "exampleScaledScore5",
  percentileRank5: "examplePercentileRank5",
  scoreType6: "exampleScoreType6",
  scaledScore6: "exampleScaledScore6",
  percentileRank6: "examplePercentileRank6",
  scoreType7: "exampleScoreType7",
  scaledScore7: "exampleScaledScore7",
  percentileRank7: "examplePercentileRank7",
  sequenceNum: "exampleSequenceNum",
  recordSerialNum: "exampleRecordSerialNum",
  cycleNum: "exampleCycleNum",
  processDate: "exampleProcessDate",
  createdDate: new Date(),
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    instCode: "exampleInstCode",
    instName: "exampleInstName",
    instType: "exampleInstType",
    deptCode: "exampleDeptCode",
    deptName: "exampleDeptName",
    gradMajorCode: "exampleGradMajorCode",
    gradMajorName: "exampleGradMajorName",
    lName: "exampleLName",
    fName: "exampleFName",
    mName: "exampleMName",
    address1: "exampleAddress1",
    address2: "exampleAddress2",
    address3: "exampleAddress3",
    addressCity: "exampleAddressCity",
    addressState: "exampleAddressState",
    addressZip: "exampleAddressZip",
    countryName: "exampleCountryName",
    countryCode: "exampleCountryCode",
    dob: "exampleDob",
    gender: "exampleGender",
    ssn: "exampleSsn",
    phone: "examplePhone",
    email: "exampleEmail",
    regNumber: "exampleRegNumber",
    testDate: "exampleTestDate",
    testCode: "exampleTestCode",
    testName: "exampleTestName",
    scoreType1: "exampleScoreType1",
    scaledScore1: "exampleScaledScore1",
    percentileRank1: "examplePercentileRank1",
    scoreType2: "exampleScoreType2",
    scaledScore2: "exampleScaledScore2",
    percentileRank2: "examplePercentileRank2",
    scoreType3: "exampleScoreType3",
    scaledScore3: "exampleScaledScore3",
    percentileRank3: "examplePercentileRank3",
    scoreType4: "exampleScoreType4",
    scaledScore4: "exampleScaledScore4",
    percentileRank4: "examplePercentileRank4",
    scoreType5: "exampleScoreType5",
    scaledScore5: "exampleScaledScore5",
    percentileRank5: "examplePercentileRank5",
    scoreType6: "exampleScoreType6",
    scaledScore6: "exampleScaledScore6",
    percentileRank6: "examplePercentileRank6",
    scoreType7: "exampleScoreType7",
    scaledScore7: "exampleScaledScore7",
    percentileRank7: "examplePercentileRank7",
    sequenceNum: "exampleSequenceNum",
    recordSerialNum: "exampleRecordSerialNum",
    cycleNum: "exampleCycleNum",
    processDate: "exampleProcessDate",
    createdDate: new Date(),
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  instCode: "exampleInstCode",
  instName: "exampleInstName",
  instType: "exampleInstType",
  deptCode: "exampleDeptCode",
  deptName: "exampleDeptName",
  gradMajorCode: "exampleGradMajorCode",
  gradMajorName: "exampleGradMajorName",
  lName: "exampleLName",
  fName: "exampleFName",
  mName: "exampleMName",
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  addressZip: "exampleAddressZip",
  countryName: "exampleCountryName",
  countryCode: "exampleCountryCode",
  dob: "exampleDob",
  gender: "exampleGender",
  ssn: "exampleSsn",
  phone: "examplePhone",
  email: "exampleEmail",
  regNumber: "exampleRegNumber",
  testDate: "exampleTestDate",
  testCode: "exampleTestCode",
  testName: "exampleTestName",
  scoreType1: "exampleScoreType1",
  scaledScore1: "exampleScaledScore1",
  percentileRank1: "examplePercentileRank1",
  scoreType2: "exampleScoreType2",
  scaledScore2: "exampleScaledScore2",
  percentileRank2: "examplePercentileRank2",
  scoreType3: "exampleScoreType3",
  scaledScore3: "exampleScaledScore3",
  percentileRank3: "examplePercentileRank3",
  scoreType4: "exampleScoreType4",
  scaledScore4: "exampleScaledScore4",
  percentileRank4: "examplePercentileRank4",
  scoreType5: "exampleScoreType5",
  scaledScore5: "exampleScaledScore5",
  percentileRank5: "examplePercentileRank5",
  scoreType6: "exampleScoreType6",
  scaledScore6: "exampleScaledScore6",
  percentileRank6: "examplePercentileRank6",
  scoreType7: "exampleScoreType7",
  scaledScore7: "exampleScaledScore7",
  percentileRank7: "examplePercentileRank7",
  sequenceNum: "exampleSequenceNum",
  recordSerialNum: "exampleRecordSerialNum",
  cycleNum: "exampleCycleNum",
  processDate: "exampleProcessDate",
  createdDate: new Date(),
  id: 42,
};

const service = {
  createEtsGre() {
    return CREATE_RESULT;
  },
  etsGres: () => FIND_MANY_RESULT,
  etsGre: ({ where }: { where: { id: string } }) => {
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

describe("EtsGre", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EtsGreService,
          useValue: service,
        },
      ],
      controllers: [EtsGreController],
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

  test("POST /etsGres", async () => {
    await request(app.getHttpServer())
      .post("/etsGres")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
      });
  });

  test("GET /etsGres", async () => {
    await request(app.getHttpServer())
      .get("/etsGres")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdDate: FIND_MANY_RESULT[0].createdDate.toISOString(),
        },
      ]);
  });

  test("GET /etsGres/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/etsGres"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /etsGres/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/etsGres"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdDate: FIND_ONE_RESULT.createdDate.toISOString(),
      });
  });

  test("POST /etsGres existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/etsGres")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/etsGres")
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
