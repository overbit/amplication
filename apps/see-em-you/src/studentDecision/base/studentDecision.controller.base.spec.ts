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
import { StudentDecisionController } from "../studentDecision.controller";
import { StudentDecisionService } from "../studentDecision.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  programId: 42,
  acceptReasons: "exampleAcceptReasons",
  otherChoice: "exampleOtherChoice",
  otherChoiceLocation: "exampleOtherChoiceLocation",
  decisionReasons: "exampleDecisionReasons",
  visit: "true",
  visitComments: "exampleVisitComments",
  otherSchoolsApplied: "exampleOtherSchoolsApplied",
  otherSchoolsAccepted: "exampleOtherSchoolsAccepted",
  submitted: "true",
  submittedDate: new Date(),
  visitHelpful: "true",
  maritalStatus: "exampleMaritalStatus",
  maritalOther: "exampleMaritalOther",
  affiliatedCmu: "true",
  progLength: "exampleProgLength",
  attendAcc: "exampleAttendAcc",
  legalName: "exampleLegalName",
  prefName: "examplePrefName",
  prefEmail: "examplePrefEmail",
  dob: new Date(),
  gender: "exampleGender",
  genderOther: "exampleGenderOther",
  telMobile: "exampleTelMobile",
  streetP1: "exampleStreetP1",
  streetP2: "exampleStreetP2",
  streetP3: "exampleStreetP3",
  streetP4: "exampleStreetP4",
  cityP: "exampleCityP",
  stateP: "exampleStateP",
  postalP: "examplePostalP",
  countryP: "exampleCountryP",
  citCountry: "exampleCitCountry",
  hispanic: 42,
  natAm: 42,
  black: 42,
  asian: 42,
  hpi: 42,
  cau: 42,
  doneDiff: "exampleDoneDiff",
  admin: 42,
  optComm: 42,
  errors: "exampleErrors",
  deferralReasons: "exampleDeferralReasons",
  deferralSemester: "exampleDeferralSemester",
  deferralYear: "exampleDeferralYear",
  pronoun: "examplePronoun",
  pronounOther: "examplePronounOther",
  affiliatedCmutxt: "exampleAffiliatedCmutxt",
  id: "exampleId",
};
const CREATE_RESULT = {
  programId: 42,
  acceptReasons: "exampleAcceptReasons",
  otherChoice: "exampleOtherChoice",
  otherChoiceLocation: "exampleOtherChoiceLocation",
  decisionReasons: "exampleDecisionReasons",
  visit: "true",
  visitComments: "exampleVisitComments",
  otherSchoolsApplied: "exampleOtherSchoolsApplied",
  otherSchoolsAccepted: "exampleOtherSchoolsAccepted",
  submitted: "true",
  submittedDate: new Date(),
  visitHelpful: "true",
  maritalStatus: "exampleMaritalStatus",
  maritalOther: "exampleMaritalOther",
  affiliatedCmu: "true",
  progLength: "exampleProgLength",
  attendAcc: "exampleAttendAcc",
  legalName: "exampleLegalName",
  prefName: "examplePrefName",
  prefEmail: "examplePrefEmail",
  dob: new Date(),
  gender: "exampleGender",
  genderOther: "exampleGenderOther",
  telMobile: "exampleTelMobile",
  streetP1: "exampleStreetP1",
  streetP2: "exampleStreetP2",
  streetP3: "exampleStreetP3",
  streetP4: "exampleStreetP4",
  cityP: "exampleCityP",
  stateP: "exampleStateP",
  postalP: "examplePostalP",
  countryP: "exampleCountryP",
  citCountry: "exampleCitCountry",
  hispanic: 42,
  natAm: 42,
  black: 42,
  asian: 42,
  hpi: 42,
  cau: 42,
  doneDiff: "exampleDoneDiff",
  admin: 42,
  optComm: 42,
  errors: "exampleErrors",
  deferralReasons: "exampleDeferralReasons",
  deferralSemester: "exampleDeferralSemester",
  deferralYear: "exampleDeferralYear",
  pronoun: "examplePronoun",
  pronounOther: "examplePronounOther",
  affiliatedCmutxt: "exampleAffiliatedCmutxt",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    programId: 42,
    acceptReasons: "exampleAcceptReasons",
    otherChoice: "exampleOtherChoice",
    otherChoiceLocation: "exampleOtherChoiceLocation",
    decisionReasons: "exampleDecisionReasons",
    visit: "true",
    visitComments: "exampleVisitComments",
    otherSchoolsApplied: "exampleOtherSchoolsApplied",
    otherSchoolsAccepted: "exampleOtherSchoolsAccepted",
    submitted: "true",
    submittedDate: new Date(),
    visitHelpful: "true",
    maritalStatus: "exampleMaritalStatus",
    maritalOther: "exampleMaritalOther",
    affiliatedCmu: "true",
    progLength: "exampleProgLength",
    attendAcc: "exampleAttendAcc",
    legalName: "exampleLegalName",
    prefName: "examplePrefName",
    prefEmail: "examplePrefEmail",
    dob: new Date(),
    gender: "exampleGender",
    genderOther: "exampleGenderOther",
    telMobile: "exampleTelMobile",
    streetP1: "exampleStreetP1",
    streetP2: "exampleStreetP2",
    streetP3: "exampleStreetP3",
    streetP4: "exampleStreetP4",
    cityP: "exampleCityP",
    stateP: "exampleStateP",
    postalP: "examplePostalP",
    countryP: "exampleCountryP",
    citCountry: "exampleCitCountry",
    hispanic: 42,
    natAm: 42,
    black: 42,
    asian: 42,
    hpi: 42,
    cau: 42,
    doneDiff: "exampleDoneDiff",
    admin: 42,
    optComm: 42,
    errors: "exampleErrors",
    deferralReasons: "exampleDeferralReasons",
    deferralSemester: "exampleDeferralSemester",
    deferralYear: "exampleDeferralYear",
    pronoun: "examplePronoun",
    pronounOther: "examplePronounOther",
    affiliatedCmutxt: "exampleAffiliatedCmutxt",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  programId: 42,
  acceptReasons: "exampleAcceptReasons",
  otherChoice: "exampleOtherChoice",
  otherChoiceLocation: "exampleOtherChoiceLocation",
  decisionReasons: "exampleDecisionReasons",
  visit: "true",
  visitComments: "exampleVisitComments",
  otherSchoolsApplied: "exampleOtherSchoolsApplied",
  otherSchoolsAccepted: "exampleOtherSchoolsAccepted",
  submitted: "true",
  submittedDate: new Date(),
  visitHelpful: "true",
  maritalStatus: "exampleMaritalStatus",
  maritalOther: "exampleMaritalOther",
  affiliatedCmu: "true",
  progLength: "exampleProgLength",
  attendAcc: "exampleAttendAcc",
  legalName: "exampleLegalName",
  prefName: "examplePrefName",
  prefEmail: "examplePrefEmail",
  dob: new Date(),
  gender: "exampleGender",
  genderOther: "exampleGenderOther",
  telMobile: "exampleTelMobile",
  streetP1: "exampleStreetP1",
  streetP2: "exampleStreetP2",
  streetP3: "exampleStreetP3",
  streetP4: "exampleStreetP4",
  cityP: "exampleCityP",
  stateP: "exampleStateP",
  postalP: "examplePostalP",
  countryP: "exampleCountryP",
  citCountry: "exampleCitCountry",
  hispanic: 42,
  natAm: 42,
  black: 42,
  asian: 42,
  hpi: 42,
  cau: 42,
  doneDiff: "exampleDoneDiff",
  admin: 42,
  optComm: 42,
  errors: "exampleErrors",
  deferralReasons: "exampleDeferralReasons",
  deferralSemester: "exampleDeferralSemester",
  deferralYear: "exampleDeferralYear",
  pronoun: "examplePronoun",
  pronounOther: "examplePronounOther",
  affiliatedCmutxt: "exampleAffiliatedCmutxt",
  id: "exampleId",
};

const service = {
  createStudentDecision() {
    return CREATE_RESULT;
  },
  studentDecisions: () => FIND_MANY_RESULT,
  studentDecision: ({ where }: { where: { id: string } }) => {
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

describe("StudentDecision", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentDecisionService,
          useValue: service,
        },
      ],
      controllers: [StudentDecisionController],
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

  test("POST /studentDecisions", async () => {
    await request(app.getHttpServer())
      .post("/studentDecisions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        submittedDate: CREATE_RESULT.submittedDate.toISOString(),
        dob: CREATE_RESULT.dob.toISOString(),
      });
  });

  test("GET /studentDecisions", async () => {
    await request(app.getHttpServer())
      .get("/studentDecisions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          submittedDate: FIND_MANY_RESULT[0].submittedDate.toISOString(),
          dob: FIND_MANY_RESULT[0].dob.toISOString(),
        },
      ]);
  });

  test("GET /studentDecisions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDecisions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentDecisions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDecisions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        submittedDate: FIND_ONE_RESULT.submittedDate.toISOString(),
        dob: FIND_ONE_RESULT.dob.toISOString(),
      });
  });

  test("POST /studentDecisions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentDecisions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        submittedDate: CREATE_RESULT.submittedDate.toISOString(),
        dob: CREATE_RESULT.dob.toISOString(),
      })
      .then(function () {
        agent
          .post("/studentDecisions")
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
