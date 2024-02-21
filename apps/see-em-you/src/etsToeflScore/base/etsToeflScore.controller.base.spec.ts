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
import { EtsToeflScoreController } from "../etsToeflScore.controller";
import { EtsToeflScoreService } from "../etsToeflScore.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  instCode: "exampleInstCode",
  deptCode: "exampleDeptCode",
  regNumber: "exampleRegNumber",
  lName: "exampleLName",
  fName: "exampleFName",
  mName: "exampleMName",
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  address4: "exampleAddress4",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  countryCode: "exampleCountryCode",
  countryName: "exampleCountryName",
  addressZip: "exampleAddressZip",
  nativeCountryCode: "exampleNativeCountryCode",
  testCenterCodeRPDT: "exampleTestCenterCodeRpdt",
  nativeCountryName: "exampleNativeCountryName",
  nativeLanguageCode: "exampleNativeLanguageCode",
  nativeLanguageName: "exampleNativeLanguageName",
  dob: "exampleDob",
  gender: "exampleGender",
  testDate: "exampleTestDate",
  testType: "exampleTestType",
  listeningIndicator: "exampleListeningIndicator",
  speakingIndicator: "exampleSpeakingIndicator",
  email: "exampleEmail",
  reportDate: "exampleReportDate",
  listening: "exampleListening",
  reading: "exampleReading",
  speaking: "exampleSpeaking",
  writing: "exampleWriting",
  total: "exampleTotal",
  testCenterCode: "exampleTestCenterCode",
  testCountryLocation: "exampleTestCountryLocation",
  identificationType: "exampleIdentificationType",
  idNumber: "exampleIdNumber",
  issuingCountry: "exampleIssuingCountry",
  listeningmb: "exampleListeningmb",
  listeningmbDate: "exampleListeningmbDate",
  readingmb: "exampleReadingmb",
  readingmbDate: "exampleReadingmbDate",
  speakingmb: "exampleSpeakingmb",
  speakingmbDate: "exampleSpeakingmbDate",
  writingmb: "exampleWritingmb",
  writingmbDate: "exampleWritingmbDate",
  totalmb: "exampleTotalmb",
  totalmbDate: "exampleTotalmbDate",
  rPDTListening: "exampleRPdtListening",
  rPDTReading: "exampleRPdtReading",
  rPDTWriting: "exampleRPdtWriting",
  essentialsListening: "exampleEssentialsListening",
  essentialsReading: "exampleEssentialsReading",
  essentialsWriting: "exampleEssentialsWriting",
  essentialsSpeaking: "exampleEssentialsSpeaking",
  essentialsTotalBandScore: "exampleEssentialsTotalBandScore",
  essentialsTotalBandScoremb: "exampleEssentialsTotalBandScoremb",
  essentialsTotalBandScorembDate: "exampleEssentialsTotalBandScorembDate",
  essentialsListeningmb: "exampleEssentialsListeningmb",
  essentialsListeningmbDate: "exampleEssentialsListeningmbDate",
  essentialsReadingmb: "exampleEssentialsReadingmb",
  essentialsReadingmbDate: "exampleEssentialsReadingmbDate",
  essentialsWritingmb: "exampleEssentialsWritingmb",
  essentialsWritingmbDate: "exampleEssentialsWritingmbDate",
  essentialsSpeakingmb: "exampleEssentialsSpeakingmb",
  essentialsSpeakingmbDate: "exampleEssentialsSpeakingmbDate",
  essentialsListeningCEFR: "exampleEssentialsListeningCefr",
  essentialsReadingCEFR: "exampleEssentialsReadingCefr",
  essentialsWritingCEFR: "exampleEssentialsWritingCefr",
  essentialsSpeakingCEFR: "exampleEssentialsSpeakingCefr",
  essentialsTotalBandScoreCEFR: "exampleEssentialsTotalBandScoreCefr",
  createdDate: new Date(),
  id: 42,
};
const CREATE_RESULT = {
  instCode: "exampleInstCode",
  deptCode: "exampleDeptCode",
  regNumber: "exampleRegNumber",
  lName: "exampleLName",
  fName: "exampleFName",
  mName: "exampleMName",
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  address4: "exampleAddress4",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  countryCode: "exampleCountryCode",
  countryName: "exampleCountryName",
  addressZip: "exampleAddressZip",
  nativeCountryCode: "exampleNativeCountryCode",
  testCenterCodeRPDT: "exampleTestCenterCodeRpdt",
  nativeCountryName: "exampleNativeCountryName",
  nativeLanguageCode: "exampleNativeLanguageCode",
  nativeLanguageName: "exampleNativeLanguageName",
  dob: "exampleDob",
  gender: "exampleGender",
  testDate: "exampleTestDate",
  testType: "exampleTestType",
  listeningIndicator: "exampleListeningIndicator",
  speakingIndicator: "exampleSpeakingIndicator",
  email: "exampleEmail",
  reportDate: "exampleReportDate",
  listening: "exampleListening",
  reading: "exampleReading",
  speaking: "exampleSpeaking",
  writing: "exampleWriting",
  total: "exampleTotal",
  testCenterCode: "exampleTestCenterCode",
  testCountryLocation: "exampleTestCountryLocation",
  identificationType: "exampleIdentificationType",
  idNumber: "exampleIdNumber",
  issuingCountry: "exampleIssuingCountry",
  listeningmb: "exampleListeningmb",
  listeningmbDate: "exampleListeningmbDate",
  readingmb: "exampleReadingmb",
  readingmbDate: "exampleReadingmbDate",
  speakingmb: "exampleSpeakingmb",
  speakingmbDate: "exampleSpeakingmbDate",
  writingmb: "exampleWritingmb",
  writingmbDate: "exampleWritingmbDate",
  totalmb: "exampleTotalmb",
  totalmbDate: "exampleTotalmbDate",
  rPDTListening: "exampleRPdtListening",
  rPDTReading: "exampleRPdtReading",
  rPDTWriting: "exampleRPdtWriting",
  essentialsListening: "exampleEssentialsListening",
  essentialsReading: "exampleEssentialsReading",
  essentialsWriting: "exampleEssentialsWriting",
  essentialsSpeaking: "exampleEssentialsSpeaking",
  essentialsTotalBandScore: "exampleEssentialsTotalBandScore",
  essentialsTotalBandScoremb: "exampleEssentialsTotalBandScoremb",
  essentialsTotalBandScorembDate: "exampleEssentialsTotalBandScorembDate",
  essentialsListeningmb: "exampleEssentialsListeningmb",
  essentialsListeningmbDate: "exampleEssentialsListeningmbDate",
  essentialsReadingmb: "exampleEssentialsReadingmb",
  essentialsReadingmbDate: "exampleEssentialsReadingmbDate",
  essentialsWritingmb: "exampleEssentialsWritingmb",
  essentialsWritingmbDate: "exampleEssentialsWritingmbDate",
  essentialsSpeakingmb: "exampleEssentialsSpeakingmb",
  essentialsSpeakingmbDate: "exampleEssentialsSpeakingmbDate",
  essentialsListeningCEFR: "exampleEssentialsListeningCefr",
  essentialsReadingCEFR: "exampleEssentialsReadingCefr",
  essentialsWritingCEFR: "exampleEssentialsWritingCefr",
  essentialsSpeakingCEFR: "exampleEssentialsSpeakingCefr",
  essentialsTotalBandScoreCEFR: "exampleEssentialsTotalBandScoreCefr",
  createdDate: new Date(),
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    instCode: "exampleInstCode",
    deptCode: "exampleDeptCode",
    regNumber: "exampleRegNumber",
    lName: "exampleLName",
    fName: "exampleFName",
    mName: "exampleMName",
    address1: "exampleAddress1",
    address2: "exampleAddress2",
    address3: "exampleAddress3",
    address4: "exampleAddress4",
    addressCity: "exampleAddressCity",
    addressState: "exampleAddressState",
    countryCode: "exampleCountryCode",
    countryName: "exampleCountryName",
    addressZip: "exampleAddressZip",
    nativeCountryCode: "exampleNativeCountryCode",
    testCenterCodeRPDT: "exampleTestCenterCodeRpdt",
    nativeCountryName: "exampleNativeCountryName",
    nativeLanguageCode: "exampleNativeLanguageCode",
    nativeLanguageName: "exampleNativeLanguageName",
    dob: "exampleDob",
    gender: "exampleGender",
    testDate: "exampleTestDate",
    testType: "exampleTestType",
    listeningIndicator: "exampleListeningIndicator",
    speakingIndicator: "exampleSpeakingIndicator",
    email: "exampleEmail",
    reportDate: "exampleReportDate",
    listening: "exampleListening",
    reading: "exampleReading",
    speaking: "exampleSpeaking",
    writing: "exampleWriting",
    total: "exampleTotal",
    testCenterCode: "exampleTestCenterCode",
    testCountryLocation: "exampleTestCountryLocation",
    identificationType: "exampleIdentificationType",
    idNumber: "exampleIdNumber",
    issuingCountry: "exampleIssuingCountry",
    listeningmb: "exampleListeningmb",
    listeningmbDate: "exampleListeningmbDate",
    readingmb: "exampleReadingmb",
    readingmbDate: "exampleReadingmbDate",
    speakingmb: "exampleSpeakingmb",
    speakingmbDate: "exampleSpeakingmbDate",
    writingmb: "exampleWritingmb",
    writingmbDate: "exampleWritingmbDate",
    totalmb: "exampleTotalmb",
    totalmbDate: "exampleTotalmbDate",
    rPDTListening: "exampleRPdtListening",
    rPDTReading: "exampleRPdtReading",
    rPDTWriting: "exampleRPdtWriting",
    essentialsListening: "exampleEssentialsListening",
    essentialsReading: "exampleEssentialsReading",
    essentialsWriting: "exampleEssentialsWriting",
    essentialsSpeaking: "exampleEssentialsSpeaking",
    essentialsTotalBandScore: "exampleEssentialsTotalBandScore",
    essentialsTotalBandScoremb: "exampleEssentialsTotalBandScoremb",
    essentialsTotalBandScorembDate: "exampleEssentialsTotalBandScorembDate",
    essentialsListeningmb: "exampleEssentialsListeningmb",
    essentialsListeningmbDate: "exampleEssentialsListeningmbDate",
    essentialsReadingmb: "exampleEssentialsReadingmb",
    essentialsReadingmbDate: "exampleEssentialsReadingmbDate",
    essentialsWritingmb: "exampleEssentialsWritingmb",
    essentialsWritingmbDate: "exampleEssentialsWritingmbDate",
    essentialsSpeakingmb: "exampleEssentialsSpeakingmb",
    essentialsSpeakingmbDate: "exampleEssentialsSpeakingmbDate",
    essentialsListeningCEFR: "exampleEssentialsListeningCefr",
    essentialsReadingCEFR: "exampleEssentialsReadingCefr",
    essentialsWritingCEFR: "exampleEssentialsWritingCefr",
    essentialsSpeakingCEFR: "exampleEssentialsSpeakingCefr",
    essentialsTotalBandScoreCEFR: "exampleEssentialsTotalBandScoreCefr",
    createdDate: new Date(),
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  instCode: "exampleInstCode",
  deptCode: "exampleDeptCode",
  regNumber: "exampleRegNumber",
  lName: "exampleLName",
  fName: "exampleFName",
  mName: "exampleMName",
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  address3: "exampleAddress3",
  address4: "exampleAddress4",
  addressCity: "exampleAddressCity",
  addressState: "exampleAddressState",
  countryCode: "exampleCountryCode",
  countryName: "exampleCountryName",
  addressZip: "exampleAddressZip",
  nativeCountryCode: "exampleNativeCountryCode",
  testCenterCodeRPDT: "exampleTestCenterCodeRpdt",
  nativeCountryName: "exampleNativeCountryName",
  nativeLanguageCode: "exampleNativeLanguageCode",
  nativeLanguageName: "exampleNativeLanguageName",
  dob: "exampleDob",
  gender: "exampleGender",
  testDate: "exampleTestDate",
  testType: "exampleTestType",
  listeningIndicator: "exampleListeningIndicator",
  speakingIndicator: "exampleSpeakingIndicator",
  email: "exampleEmail",
  reportDate: "exampleReportDate",
  listening: "exampleListening",
  reading: "exampleReading",
  speaking: "exampleSpeaking",
  writing: "exampleWriting",
  total: "exampleTotal",
  testCenterCode: "exampleTestCenterCode",
  testCountryLocation: "exampleTestCountryLocation",
  identificationType: "exampleIdentificationType",
  idNumber: "exampleIdNumber",
  issuingCountry: "exampleIssuingCountry",
  listeningmb: "exampleListeningmb",
  listeningmbDate: "exampleListeningmbDate",
  readingmb: "exampleReadingmb",
  readingmbDate: "exampleReadingmbDate",
  speakingmb: "exampleSpeakingmb",
  speakingmbDate: "exampleSpeakingmbDate",
  writingmb: "exampleWritingmb",
  writingmbDate: "exampleWritingmbDate",
  totalmb: "exampleTotalmb",
  totalmbDate: "exampleTotalmbDate",
  rPDTListening: "exampleRPdtListening",
  rPDTReading: "exampleRPdtReading",
  rPDTWriting: "exampleRPdtWriting",
  essentialsListening: "exampleEssentialsListening",
  essentialsReading: "exampleEssentialsReading",
  essentialsWriting: "exampleEssentialsWriting",
  essentialsSpeaking: "exampleEssentialsSpeaking",
  essentialsTotalBandScore: "exampleEssentialsTotalBandScore",
  essentialsTotalBandScoremb: "exampleEssentialsTotalBandScoremb",
  essentialsTotalBandScorembDate: "exampleEssentialsTotalBandScorembDate",
  essentialsListeningmb: "exampleEssentialsListeningmb",
  essentialsListeningmbDate: "exampleEssentialsListeningmbDate",
  essentialsReadingmb: "exampleEssentialsReadingmb",
  essentialsReadingmbDate: "exampleEssentialsReadingmbDate",
  essentialsWritingmb: "exampleEssentialsWritingmb",
  essentialsWritingmbDate: "exampleEssentialsWritingmbDate",
  essentialsSpeakingmb: "exampleEssentialsSpeakingmb",
  essentialsSpeakingmbDate: "exampleEssentialsSpeakingmbDate",
  essentialsListeningCEFR: "exampleEssentialsListeningCefr",
  essentialsReadingCEFR: "exampleEssentialsReadingCefr",
  essentialsWritingCEFR: "exampleEssentialsWritingCefr",
  essentialsSpeakingCEFR: "exampleEssentialsSpeakingCefr",
  essentialsTotalBandScoreCEFR: "exampleEssentialsTotalBandScoreCefr",
  createdDate: new Date(),
  id: 42,
};

const service = {
  createEtsToeflScore() {
    return CREATE_RESULT;
  },
  etsToeflScores: () => FIND_MANY_RESULT,
  etsToeflScore: ({ where }: { where: { id: string } }) => {
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
