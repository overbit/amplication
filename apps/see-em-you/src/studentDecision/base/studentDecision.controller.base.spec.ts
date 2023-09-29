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
import { StudentDecisionController } from "../studentDecision.controller";
import { StudentDecisionService } from "../studentDecision.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  acceptReasons: "exampleAcceptReasons",
  admin: 42,
  affiliatedCmu: "true",
  affiliatedCmutxt: "exampleAffiliatedCmutxt",
  asian: 42,
  attendAcc: "exampleAttendAcc",
  black: 42,
  cau: 42,
  citCountry: "exampleCitCountry",
  cityP: "exampleCityP",
  countryP: "exampleCountryP",
  decisionReasons: "exampleDecisionReasons",
  deferralReasons: "exampleDeferralReasons",
  deferralSemester: "exampleDeferralSemester",
  deferralYear: "exampleDeferralYear",
  dob: new Date(),
  doneDiff: "exampleDoneDiff",
  errors: "exampleErrors",
  gender: "exampleGender",
  genderOther: "exampleGenderOther",
  hispanic: 42,
  hpi: 42,
  id: "exampleId",
  legalName: "exampleLegalName",
  maritalOther: "exampleMaritalOther",
  maritalStatus: "exampleMaritalStatus",
  natAm: 42,
  optComm: 42,
  otherChoice: "exampleOtherChoice",
  otherChoiceLocation: "exampleOtherChoiceLocation",
  otherSchoolsAccepted: "exampleOtherSchoolsAccepted",
  otherSchoolsApplied: "exampleOtherSchoolsApplied",
  postalP: "examplePostalP",
  prefEmail: "examplePrefEmail",
  prefName: "examplePrefName",
  progLength: "exampleProgLength",
  programId: 42,
  pronoun: "examplePronoun",
  pronounOther: "examplePronounOther",
  stateP: "exampleStateP",
  streetP1: "exampleStreetP1",
  streetP2: "exampleStreetP2",
  streetP3: "exampleStreetP3",
  streetP4: "exampleStreetP4",
  submitted: "true",
  submittedDate: new Date(),
  telMobile: "exampleTelMobile",
  visit: "true",
  visitComments: "exampleVisitComments",
  visitHelpful: "true",
};
const CREATE_RESULT = {
  acceptReasons: "exampleAcceptReasons",
  admin: 42,
  affiliatedCmu: "true",
  affiliatedCmutxt: "exampleAffiliatedCmutxt",
  asian: 42,
  attendAcc: "exampleAttendAcc",
  black: 42,
  cau: 42,
  citCountry: "exampleCitCountry",
  cityP: "exampleCityP",
  countryP: "exampleCountryP",
  decisionReasons: "exampleDecisionReasons",
  deferralReasons: "exampleDeferralReasons",
  deferralSemester: "exampleDeferralSemester",
  deferralYear: "exampleDeferralYear",
  dob: new Date(),
  doneDiff: "exampleDoneDiff",
  errors: "exampleErrors",
  gender: "exampleGender",
  genderOther: "exampleGenderOther",
  hispanic: 42,
  hpi: 42,
  id: "exampleId",
  legalName: "exampleLegalName",
  maritalOther: "exampleMaritalOther",
  maritalStatus: "exampleMaritalStatus",
  natAm: 42,
  optComm: 42,
  otherChoice: "exampleOtherChoice",
  otherChoiceLocation: "exampleOtherChoiceLocation",
  otherSchoolsAccepted: "exampleOtherSchoolsAccepted",
  otherSchoolsApplied: "exampleOtherSchoolsApplied",
  postalP: "examplePostalP",
  prefEmail: "examplePrefEmail",
  prefName: "examplePrefName",
  progLength: "exampleProgLength",
  programId: 42,
  pronoun: "examplePronoun",
  pronounOther: "examplePronounOther",
  stateP: "exampleStateP",
  streetP1: "exampleStreetP1",
  streetP2: "exampleStreetP2",
  streetP3: "exampleStreetP3",
  streetP4: "exampleStreetP4",
  submitted: "true",
  submittedDate: new Date(),
  telMobile: "exampleTelMobile",
  visit: "true",
  visitComments: "exampleVisitComments",
  visitHelpful: "true",
};
const FIND_MANY_RESULT = [
  {
    acceptReasons: "exampleAcceptReasons",
    admin: 42,
    affiliatedCmu: "true",
    affiliatedCmutxt: "exampleAffiliatedCmutxt",
    asian: 42,
    attendAcc: "exampleAttendAcc",
    black: 42,
    cau: 42,
    citCountry: "exampleCitCountry",
    cityP: "exampleCityP",
    countryP: "exampleCountryP",
    decisionReasons: "exampleDecisionReasons",
    deferralReasons: "exampleDeferralReasons",
    deferralSemester: "exampleDeferralSemester",
    deferralYear: "exampleDeferralYear",
    dob: new Date(),
    doneDiff: "exampleDoneDiff",
    errors: "exampleErrors",
    gender: "exampleGender",
    genderOther: "exampleGenderOther",
    hispanic: 42,
    hpi: 42,
    id: "exampleId",
    legalName: "exampleLegalName",
    maritalOther: "exampleMaritalOther",
    maritalStatus: "exampleMaritalStatus",
    natAm: 42,
    optComm: 42,
    otherChoice: "exampleOtherChoice",
    otherChoiceLocation: "exampleOtherChoiceLocation",
    otherSchoolsAccepted: "exampleOtherSchoolsAccepted",
    otherSchoolsApplied: "exampleOtherSchoolsApplied",
    postalP: "examplePostalP",
    prefEmail: "examplePrefEmail",
    prefName: "examplePrefName",
    progLength: "exampleProgLength",
    programId: 42,
    pronoun: "examplePronoun",
    pronounOther: "examplePronounOther",
    stateP: "exampleStateP",
    streetP1: "exampleStreetP1",
    streetP2: "exampleStreetP2",
    streetP3: "exampleStreetP3",
    streetP4: "exampleStreetP4",
    submitted: "true",
    submittedDate: new Date(),
    telMobile: "exampleTelMobile",
    visit: "true",
    visitComments: "exampleVisitComments",
    visitHelpful: "true",
  },
];
const FIND_ONE_RESULT = {
  acceptReasons: "exampleAcceptReasons",
  admin: 42,
  affiliatedCmu: "true",
  affiliatedCmutxt: "exampleAffiliatedCmutxt",
  asian: 42,
  attendAcc: "exampleAttendAcc",
  black: 42,
  cau: 42,
  citCountry: "exampleCitCountry",
  cityP: "exampleCityP",
  countryP: "exampleCountryP",
  decisionReasons: "exampleDecisionReasons",
  deferralReasons: "exampleDeferralReasons",
  deferralSemester: "exampleDeferralSemester",
  deferralYear: "exampleDeferralYear",
  dob: new Date(),
  doneDiff: "exampleDoneDiff",
  errors: "exampleErrors",
  gender: "exampleGender",
  genderOther: "exampleGenderOther",
  hispanic: 42,
  hpi: 42,
  id: "exampleId",
  legalName: "exampleLegalName",
  maritalOther: "exampleMaritalOther",
  maritalStatus: "exampleMaritalStatus",
  natAm: 42,
  optComm: 42,
  otherChoice: "exampleOtherChoice",
  otherChoiceLocation: "exampleOtherChoiceLocation",
  otherSchoolsAccepted: "exampleOtherSchoolsAccepted",
  otherSchoolsApplied: "exampleOtherSchoolsApplied",
  postalP: "examplePostalP",
  prefEmail: "examplePrefEmail",
  prefName: "examplePrefName",
  progLength: "exampleProgLength",
  programId: 42,
  pronoun: "examplePronoun",
  pronounOther: "examplePronounOther",
  stateP: "exampleStateP",
  streetP1: "exampleStreetP1",
  streetP2: "exampleStreetP2",
  streetP3: "exampleStreetP3",
  streetP4: "exampleStreetP4",
  submitted: "true",
  submittedDate: new Date(),
  telMobile: "exampleTelMobile",
  visit: "true",
  visitComments: "exampleVisitComments",
  visitHelpful: "true",
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

  test("POST /studentDecisions", async () => {
    await request(app.getHttpServer())
      .post("/studentDecisions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dob: CREATE_RESULT.dob.toISOString(),
        submittedDate: CREATE_RESULT.submittedDate.toISOString(),
      });
  });

  test("GET /studentDecisions", async () => {
    await request(app.getHttpServer())
      .get("/studentDecisions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          dob: FIND_MANY_RESULT[0].dob.toISOString(),
          submittedDate: FIND_MANY_RESULT[0].submittedDate.toISOString(),
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
        dob: FIND_ONE_RESULT.dob.toISOString(),
        submittedDate: FIND_ONE_RESULT.submittedDate.toISOString(),
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
        dob: CREATE_RESULT.dob.toISOString(),
        submittedDate: CREATE_RESULT.submittedDate.toISOString(),
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
