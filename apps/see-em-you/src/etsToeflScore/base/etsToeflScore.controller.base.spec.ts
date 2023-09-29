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
import { EtsToeflScoreController } from "../etsToeflScore.controller";
import { EtsToeflScoreService } from "../etsToeflScore.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  address4: "exampleAddress4",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  addressZip: "exampleAddressZip",
  countryCode: "exampleCountryCode",
  countryName: "exampleCountryName",
  createdDate: new Date(),
  deptCode: "exampleDeptCode",
  dob: "exampleDob",
  email: "exampleEmail",
  essentialsListening: "exampleEssentialsListening",
  essentialsListeningCEFR: "exampleEssentialsListeningCefr",
  essentialsListeningmb: "exampleEssentialsListeningmb",
  essentialsListeningmbDate: "exampleEssentialsListeningmbDate",
  essentialsReading: "exampleEssentialsReading",
  essentialsReadingCEFR: "exampleEssentialsReadingCefr",
  essentialsReadingmb: "exampleEssentialsReadingmb",
  essentialsReadingmbDate: "exampleEssentialsReadingmbDate",
  essentialsSpeaking: "exampleEssentialsSpeaking",
  essentialsSpeakingCEFR: "exampleEssentialsSpeakingCefr",
  essentialsSpeakingmb: "exampleEssentialsSpeakingmb",
  essentialsSpeakingmbDate: "exampleEssentialsSpeakingmbDate",
  essentialsTotalBandScore: "exampleEssentialsTotalBandScore",
  essentialsTotalBandScoreCEFR: "exampleEssentialsTotalBandScoreCefr",
  essentialsTotalBandScoremb: "exampleEssentialsTotalBandScoremb",
  essentialsTotalBandScorembDate: "exampleEssentialsTotalBandScorembDate",
  essentialsWriting: "exampleEssentialsWriting",
  essentialsWritingCEFR: "exampleEssentialsWritingCefr",
  essentialsWritingmb: "exampleEssentialsWritingmb",
  essentialsWritingmbDate: "exampleEssentialsWritingmbDate",
  fName: "exampleFName",
  gender: "exampleGender",
  id: 42,
  identificationType: "exampleIdentificationType",
  idNumber: "exampleIdNumber",
  instCode: "exampleInstCode",
  issuingCountry: "exampleIssuingCountry",
  listening: "exampleListening",
  listeningIndicator: "exampleListeningIndicator",
  listeningmb: "exampleListeningmb",
  listeningmbDate: "exampleListeningmbDate",
  lName: "exampleLName",
  mName: "exampleMName",
  nativeCountryCode: "exampleNativeCountryCode",
  nativeCountryName: "exampleNativeCountryName",
  nativeLanguageCode: "exampleNativeLanguageCode",
  nativeLanguageName: "exampleNativeLanguageName",
  reading: "exampleReading",
  readingmb: "exampleReadingmb",
  readingmbDate: "exampleReadingmbDate",
  regNumber: "exampleRegNumber",
  reportDate: "exampleReportDate",
  rPDTListening: "exampleRPdtListening",
  rPDTReading: "exampleRPdtReading",
  rPDTWriting: "exampleRPdtWriting",
  speaking: "exampleSpeaking",
  speakingIndicator: "exampleSpeakingIndicator",
  speakingmb: "exampleSpeakingmb",
  speakingmbDate: "exampleSpeakingmbDate",
  testCenterCode: "exampleTestCenterCode",
  testCenterCodeRPDT: "exampleTestCenterCodeRpdt",
  testCountryLocation: "exampleTestCountryLocation",
  testDate: "exampleTestDate",
  testType: "exampleTestType",
  total: "exampleTotal",
  totalmb: "exampleTotalmb",
  totalmbDate: "exampleTotalmbDate",
  writing: "exampleWriting",
  writingmb: "exampleWritingmb",
  writingmbDate: "exampleWritingmbDate",
};
const CREATE_RESULT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  address4: "exampleAddress4",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  addressZip: "exampleAddressZip",
  countryCode: "exampleCountryCode",
  countryName: "exampleCountryName",
  createdDate: new Date(),
  deptCode: "exampleDeptCode",
  dob: "exampleDob",
  email: "exampleEmail",
  essentialsListening: "exampleEssentialsListening",
  essentialsListeningCEFR: "exampleEssentialsListeningCefr",
  essentialsListeningmb: "exampleEssentialsListeningmb",
  essentialsListeningmbDate: "exampleEssentialsListeningmbDate",
  essentialsReading: "exampleEssentialsReading",
  essentialsReadingCEFR: "exampleEssentialsReadingCefr",
  essentialsReadingmb: "exampleEssentialsReadingmb",
  essentialsReadingmbDate: "exampleEssentialsReadingmbDate",
  essentialsSpeaking: "exampleEssentialsSpeaking",
  essentialsSpeakingCEFR: "exampleEssentialsSpeakingCefr",
  essentialsSpeakingmb: "exampleEssentialsSpeakingmb",
  essentialsSpeakingmbDate: "exampleEssentialsSpeakingmbDate",
  essentialsTotalBandScore: "exampleEssentialsTotalBandScore",
  essentialsTotalBandScoreCEFR: "exampleEssentialsTotalBandScoreCefr",
  essentialsTotalBandScoremb: "exampleEssentialsTotalBandScoremb",
  essentialsTotalBandScorembDate: "exampleEssentialsTotalBandScorembDate",
  essentialsWriting: "exampleEssentialsWriting",
  essentialsWritingCEFR: "exampleEssentialsWritingCefr",
  essentialsWritingmb: "exampleEssentialsWritingmb",
  essentialsWritingmbDate: "exampleEssentialsWritingmbDate",
  fName: "exampleFName",
  gender: "exampleGender",
  id: 42,
  identificationType: "exampleIdentificationType",
  idNumber: "exampleIdNumber",
  instCode: "exampleInstCode",
  issuingCountry: "exampleIssuingCountry",
  listening: "exampleListening",
  listeningIndicator: "exampleListeningIndicator",
  listeningmb: "exampleListeningmb",
  listeningmbDate: "exampleListeningmbDate",
  lName: "exampleLName",
  mName: "exampleMName",
  nativeCountryCode: "exampleNativeCountryCode",
  nativeCountryName: "exampleNativeCountryName",
  nativeLanguageCode: "exampleNativeLanguageCode",
  nativeLanguageName: "exampleNativeLanguageName",
  reading: "exampleReading",
  readingmb: "exampleReadingmb",
  readingmbDate: "exampleReadingmbDate",
  regNumber: "exampleRegNumber",
  reportDate: "exampleReportDate",
  rPDTListening: "exampleRPdtListening",
  rPDTReading: "exampleRPdtReading",
  rPDTWriting: "exampleRPdtWriting",
  speaking: "exampleSpeaking",
  speakingIndicator: "exampleSpeakingIndicator",
  speakingmb: "exampleSpeakingmb",
  speakingmbDate: "exampleSpeakingmbDate",
  testCenterCode: "exampleTestCenterCode",
  testCenterCodeRPDT: "exampleTestCenterCodeRpdt",
  testCountryLocation: "exampleTestCountryLocation",
  testDate: "exampleTestDate",
  testType: "exampleTestType",
  total: "exampleTotal",
  totalmb: "exampleTotalmb",
  totalmbDate: "exampleTotalmbDate",
  writing: "exampleWriting",
  writingmb: "exampleWritingmb",
  writingmbDate: "exampleWritingmbDate",
};
const FIND_MANY_RESULT = [
  {
    address1: "exampleAddress1",
    address2: "exampleAddress2",
    address3: "exampleAddress3",
    address4: "exampleAddress4",
    addressCity: "exampleAddressCity",
    addressState: "exampleAddressState",
    addressZip: "exampleAddressZip",
    countryCode: "exampleCountryCode",
    countryName: "exampleCountryName",
    createdDate: new Date(),
    deptCode: "exampleDeptCode",
    dob: "exampleDob",
    email: "exampleEmail",
    essentialsListening: "exampleEssentialsListening",
    essentialsListeningCEFR: "exampleEssentialsListeningCefr",
    essentialsListeningmb: "exampleEssentialsListeningmb",
    essentialsListeningmbDate: "exampleEssentialsListeningmbDate",
    essentialsReading: "exampleEssentialsReading",
    essentialsReadingCEFR: "exampleEssentialsReadingCefr",
    essentialsReadingmb: "exampleEssentialsReadingmb",
    essentialsReadingmbDate: "exampleEssentialsReadingmbDate",
    essentialsSpeaking: "exampleEssentialsSpeaking",
    essentialsSpeakingCEFR: "exampleEssentialsSpeakingCefr",
    essentialsSpeakingmb: "exampleEssentialsSpeakingmb",
    essentialsSpeakingmbDate: "exampleEssentialsSpeakingmbDate",
    essentialsTotalBandScore: "exampleEssentialsTotalBandScore",
    essentialsTotalBandScoreCEFR: "exampleEssentialsTotalBandScoreCefr",
    essentialsTotalBandScoremb: "exampleEssentialsTotalBandScoremb",
    essentialsTotalBandScorembDate: "exampleEssentialsTotalBandScorembDate",
    essentialsWriting: "exampleEssentialsWriting",
    essentialsWritingCEFR: "exampleEssentialsWritingCefr",
    essentialsWritingmb: "exampleEssentialsWritingmb",
    essentialsWritingmbDate: "exampleEssentialsWritingmbDate",
    fName: "exampleFName",
    gender: "exampleGender",
    id: 42,
    identificationType: "exampleIdentificationType",
    idNumber: "exampleIdNumber",
    instCode: "exampleInstCode",
    issuingCountry: "exampleIssuingCountry",
    listening: "exampleListening",
    listeningIndicator: "exampleListeningIndicator",
    listeningmb: "exampleListeningmb",
    listeningmbDate: "exampleListeningmbDate",
    lName: "exampleLName",
    mName: "exampleMName",
    nativeCountryCode: "exampleNativeCountryCode",
    nativeCountryName: "exampleNativeCountryName",
    nativeLanguageCode: "exampleNativeLanguageCode",
    nativeLanguageName: "exampleNativeLanguageName",
    reading: "exampleReading",
    readingmb: "exampleReadingmb",
    readingmbDate: "exampleReadingmbDate",
    regNumber: "exampleRegNumber",
    reportDate: "exampleReportDate",
    rPDTListening: "exampleRPdtListening",
    rPDTReading: "exampleRPdtReading",
    rPDTWriting: "exampleRPdtWriting",
    speaking: "exampleSpeaking",
    speakingIndicator: "exampleSpeakingIndicator",
    speakingmb: "exampleSpeakingmb",
    speakingmbDate: "exampleSpeakingmbDate",
    testCenterCode: "exampleTestCenterCode",
    testCenterCodeRPDT: "exampleTestCenterCodeRpdt",
    testCountryLocation: "exampleTestCountryLocation",
    testDate: "exampleTestDate",
    testType: "exampleTestType",
    total: "exampleTotal",
    totalmb: "exampleTotalmb",
    totalmbDate: "exampleTotalmbDate",
    writing: "exampleWriting",
    writingmb: "exampleWritingmb",
    writingmbDate: "exampleWritingmbDate",
  },
];
const FIND_ONE_RESULT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  address4: "exampleAddress4",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  addressZip: "exampleAddressZip",
  countryCode: "exampleCountryCode",
  countryName: "exampleCountryName",
  createdDate: new Date(),
  deptCode: "exampleDeptCode",
  dob: "exampleDob",
  email: "exampleEmail",
  essentialsListening: "exampleEssentialsListening",
  essentialsListeningCEFR: "exampleEssentialsListeningCefr",
  essentialsListeningmb: "exampleEssentialsListeningmb",
  essentialsListeningmbDate: "exampleEssentialsListeningmbDate",
  essentialsReading: "exampleEssentialsReading",
  essentialsReadingCEFR: "exampleEssentialsReadingCefr",
  essentialsReadingmb: "exampleEssentialsReadingmb",
  essentialsReadingmbDate: "exampleEssentialsReadingmbDate",
  essentialsSpeaking: "exampleEssentialsSpeaking",
  essentialsSpeakingCEFR: "exampleEssentialsSpeakingCefr",
  essentialsSpeakingmb: "exampleEssentialsSpeakingmb",
  essentialsSpeakingmbDate: "exampleEssentialsSpeakingmbDate",
  essentialsTotalBandScore: "exampleEssentialsTotalBandScore",
  essentialsTotalBandScoreCEFR: "exampleEssentialsTotalBandScoreCefr",
  essentialsTotalBandScoremb: "exampleEssentialsTotalBandScoremb",
  essentialsTotalBandScorembDate: "exampleEssentialsTotalBandScorembDate",
  essentialsWriting: "exampleEssentialsWriting",
  essentialsWritingCEFR: "exampleEssentialsWritingCefr",
  essentialsWritingmb: "exampleEssentialsWritingmb",
  essentialsWritingmbDate: "exampleEssentialsWritingmbDate",
  fName: "exampleFName",
  gender: "exampleGender",
  id: 42,
  identificationType: "exampleIdentificationType",
  idNumber: "exampleIdNumber",
  instCode: "exampleInstCode",
  issuingCountry: "exampleIssuingCountry",
  listening: "exampleListening",
  listeningIndicator: "exampleListeningIndicator",
  listeningmb: "exampleListeningmb",
  listeningmbDate: "exampleListeningmbDate",
  lName: "exampleLName",
  mName: "exampleMName",
  nativeCountryCode: "exampleNativeCountryCode",
  nativeCountryName: "exampleNativeCountryName",
  nativeLanguageCode: "exampleNativeLanguageCode",
  nativeLanguageName: "exampleNativeLanguageName",
  reading: "exampleReading",
  readingmb: "exampleReadingmb",
  readingmbDate: "exampleReadingmbDate",
  regNumber: "exampleRegNumber",
  reportDate: "exampleReportDate",
  rPDTListening: "exampleRPdtListening",
  rPDTReading: "exampleRPdtReading",
  rPDTWriting: "exampleRPdtWriting",
  speaking: "exampleSpeaking",
  speakingIndicator: "exampleSpeakingIndicator",
  speakingmb: "exampleSpeakingmb",
  speakingmbDate: "exampleSpeakingmbDate",
  testCenterCode: "exampleTestCenterCode",
  testCenterCodeRPDT: "exampleTestCenterCodeRpdt",
  testCountryLocation: "exampleTestCountryLocation",
  testDate: "exampleTestDate",
  testType: "exampleTestType",
  total: "exampleTotal",
  totalmb: "exampleTotalmb",
  totalmbDate: "exampleTotalmbDate",
  writing: "exampleWriting",
  writingmb: "exampleWritingmb",
  writingmbDate: "exampleWritingmbDate",
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

describe("EtsToeflScore", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EtsToeflScoreService,
          useValue: service,
        },
      ],
      controllers: [EtsToeflScoreController],
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

  test("POST /etsToeflScores", async () => {
    await request(app.getHttpServer())
      .post("/etsToeflScores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
      });
  });

  test("GET /etsToeflScores", async () => {
    await request(app.getHttpServer())
      .get("/etsToeflScores")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdDate: FIND_MANY_RESULT[0].createdDate.toISOString(),
        },
      ]);
  });

  test("GET /etsToeflScores/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/etsToeflScores"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /etsToeflScores/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/etsToeflScores"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdDate: FIND_ONE_RESULT.createdDate.toISOString(),
      });
  });

  test("POST /etsToeflScores existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/etsToeflScores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/etsToeflScores")
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
