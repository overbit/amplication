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
import { PeSlateAppController } from "../peSlateApp.controller";
import { PeSlateAppService } from "../peSlateApp.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  suffix: "exampleSuffix",
  email: "exampleEmail",
  appSubmittedDate: "exampleAppSubmittedDate",
  applicationStatus: "exampleApplicationStatus",
  roundExportCode: "exampleRoundExportCode",
  decisionConfirmedExportCode: "exampleDecisionConfirmedExportCode",
  birthdate: "exampleBirthdate",
  sex: "exampleSex",
  ipedsClassification: "exampleIpedsClassification",
  hispanic: "exampleHispanic",
  race: "exampleRace",
  citizenshipStatus: "exampleCitizenshipStatus",
  primaryCitizenship: "examplePrimaryCitizenship",
  secondaryCitizenship: "exampleSecondaryCitizenship",
  emailAddress: "exampleEmailAddress",
  phoneNumber: "examplePhoneNumber",
  mobilePhoneNumber: "exampleMobilePhoneNumber",
  mailingAddressStreet1: "exampleMailingAddressStreet1",
  mailingAddressStreet2: "exampleMailingAddressStreet2",
  mailingAddressStreet3: "exampleMailingAddressStreet3",
  mailingAddressCity: "exampleMailingAddressCity",
  mailingAddressRegion: "exampleMailingAddressRegion",
  mailingAddressPostalCode: "exampleMailingAddressPostalCode",
  mailingAddressCountryName: "exampleMailingAddressCountryName",
  mailingAddressGeomarket: "exampleMailingAddressGeomarket",
  mailingAddressValidFromDate: "exampleMailingAddressValidFromDate",
  mailingAddressValidToDate: "exampleMailingAddressValidToDate",
  mailingAddressCountryFipsCode: "exampleMailingAddressCountryFipsCode",
  mailingAddressCountryIso2Code: "exampleMailingAddressCountryIso2Code",
  mailingAddressCountryIso3Code: "exampleMailingAddressCountryIso3Code",
  mailingAddressCountrySisExport: "exampleMailingAddressCountrySisExport",
  permanentAddressStreet1: "examplePermanentAddressStreet1",
  permanentAddressStreet2: "examplePermanentAddressStreet2",
  permanentAddressStreet3: "examplePermanentAddressStreet3",
  permanentAddressCity: "examplePermanentAddressCity",
  permanentAddressRegion: "examplePermanentAddressRegion",
  permanentAddressPostalCode: "examplePermanentAddressPostalCode",
  permanentAddressCountry: "examplePermanentAddressCountry",
  permanentAddressGeomarket: "examplePermanentAddressGeomarket",
  permanentAddressCountryFipsCode: "examplePermanentAddressCountryFipsCode",
  permanentAddressCountryIso2Code: "examplePermanentAddressCountryIso2Code",
  permanentAddressCountryIso3Code: "examplePermanentAddressCountryIso3Code",
  permanentAddressCountrySisExport: "examplePermanentAddressCountrySisExport",
  language: "exampleLanguage",
  personalWebSite: "examplePersonalWebSite",
  reference1Waiver: "exampleReference1Waiver",
  reference2Waiver: "exampleReference2Waiver",
  reference3Waiver: "exampleReference3Waiver",
  id: "exampleId",
};
const CREATE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  suffix: "exampleSuffix",
  email: "exampleEmail",
  appSubmittedDate: "exampleAppSubmittedDate",
  applicationStatus: "exampleApplicationStatus",
  roundExportCode: "exampleRoundExportCode",
  decisionConfirmedExportCode: "exampleDecisionConfirmedExportCode",
  birthdate: "exampleBirthdate",
  sex: "exampleSex",
  ipedsClassification: "exampleIpedsClassification",
  hispanic: "exampleHispanic",
  race: "exampleRace",
  citizenshipStatus: "exampleCitizenshipStatus",
  primaryCitizenship: "examplePrimaryCitizenship",
  secondaryCitizenship: "exampleSecondaryCitizenship",
  emailAddress: "exampleEmailAddress",
  phoneNumber: "examplePhoneNumber",
  mobilePhoneNumber: "exampleMobilePhoneNumber",
  mailingAddressStreet1: "exampleMailingAddressStreet1",
  mailingAddressStreet2: "exampleMailingAddressStreet2",
  mailingAddressStreet3: "exampleMailingAddressStreet3",
  mailingAddressCity: "exampleMailingAddressCity",
  mailingAddressRegion: "exampleMailingAddressRegion",
  mailingAddressPostalCode: "exampleMailingAddressPostalCode",
  mailingAddressCountryName: "exampleMailingAddressCountryName",
  mailingAddressGeomarket: "exampleMailingAddressGeomarket",
  mailingAddressValidFromDate: "exampleMailingAddressValidFromDate",
  mailingAddressValidToDate: "exampleMailingAddressValidToDate",
  mailingAddressCountryFipsCode: "exampleMailingAddressCountryFipsCode",
  mailingAddressCountryIso2Code: "exampleMailingAddressCountryIso2Code",
  mailingAddressCountryIso3Code: "exampleMailingAddressCountryIso3Code",
  mailingAddressCountrySisExport: "exampleMailingAddressCountrySisExport",
  permanentAddressStreet1: "examplePermanentAddressStreet1",
  permanentAddressStreet2: "examplePermanentAddressStreet2",
  permanentAddressStreet3: "examplePermanentAddressStreet3",
  permanentAddressCity: "examplePermanentAddressCity",
  permanentAddressRegion: "examplePermanentAddressRegion",
  permanentAddressPostalCode: "examplePermanentAddressPostalCode",
  permanentAddressCountry: "examplePermanentAddressCountry",
  permanentAddressGeomarket: "examplePermanentAddressGeomarket",
  permanentAddressCountryFipsCode: "examplePermanentAddressCountryFipsCode",
  permanentAddressCountryIso2Code: "examplePermanentAddressCountryIso2Code",
  permanentAddressCountryIso3Code: "examplePermanentAddressCountryIso3Code",
  permanentAddressCountrySisExport: "examplePermanentAddressCountrySisExport",
  language: "exampleLanguage",
  personalWebSite: "examplePersonalWebSite",
  reference1Waiver: "exampleReference1Waiver",
  reference2Waiver: "exampleReference2Waiver",
  reference3Waiver: "exampleReference3Waiver",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    prefix: "examplePrefix",
    first: "exampleFirst",
    middle: "exampleMiddle",
    last: "exampleLast",
    suffix: "exampleSuffix",
    email: "exampleEmail",
    appSubmittedDate: "exampleAppSubmittedDate",
    applicationStatus: "exampleApplicationStatus",
    roundExportCode: "exampleRoundExportCode",
    decisionConfirmedExportCode: "exampleDecisionConfirmedExportCode",
    birthdate: "exampleBirthdate",
    sex: "exampleSex",
    ipedsClassification: "exampleIpedsClassification",
    hispanic: "exampleHispanic",
    race: "exampleRace",
    citizenshipStatus: "exampleCitizenshipStatus",
    primaryCitizenship: "examplePrimaryCitizenship",
    secondaryCitizenship: "exampleSecondaryCitizenship",
    emailAddress: "exampleEmailAddress",
    phoneNumber: "examplePhoneNumber",
    mobilePhoneNumber: "exampleMobilePhoneNumber",
    mailingAddressStreet1: "exampleMailingAddressStreet1",
    mailingAddressStreet2: "exampleMailingAddressStreet2",
    mailingAddressStreet3: "exampleMailingAddressStreet3",
    mailingAddressCity: "exampleMailingAddressCity",
    mailingAddressRegion: "exampleMailingAddressRegion",
    mailingAddressPostalCode: "exampleMailingAddressPostalCode",
    mailingAddressCountryName: "exampleMailingAddressCountryName",
    mailingAddressGeomarket: "exampleMailingAddressGeomarket",
    mailingAddressValidFromDate: "exampleMailingAddressValidFromDate",
    mailingAddressValidToDate: "exampleMailingAddressValidToDate",
    mailingAddressCountryFipsCode: "exampleMailingAddressCountryFipsCode",
    mailingAddressCountryIso2Code: "exampleMailingAddressCountryIso2Code",
    mailingAddressCountryIso3Code: "exampleMailingAddressCountryIso3Code",
    mailingAddressCountrySisExport: "exampleMailingAddressCountrySisExport",
    permanentAddressStreet1: "examplePermanentAddressStreet1",
    permanentAddressStreet2: "examplePermanentAddressStreet2",
    permanentAddressStreet3: "examplePermanentAddressStreet3",
    permanentAddressCity: "examplePermanentAddressCity",
    permanentAddressRegion: "examplePermanentAddressRegion",
    permanentAddressPostalCode: "examplePermanentAddressPostalCode",
    permanentAddressCountry: "examplePermanentAddressCountry",
    permanentAddressGeomarket: "examplePermanentAddressGeomarket",
    permanentAddressCountryFipsCode: "examplePermanentAddressCountryFipsCode",
    permanentAddressCountryIso2Code: "examplePermanentAddressCountryIso2Code",
    permanentAddressCountryIso3Code: "examplePermanentAddressCountryIso3Code",
    permanentAddressCountrySisExport: "examplePermanentAddressCountrySisExport",
    language: "exampleLanguage",
    personalWebSite: "examplePersonalWebSite",
    reference1Waiver: "exampleReference1Waiver",
    reference2Waiver: "exampleReference2Waiver",
    reference3Waiver: "exampleReference3Waiver",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  suffix: "exampleSuffix",
  email: "exampleEmail",
  appSubmittedDate: "exampleAppSubmittedDate",
  applicationStatus: "exampleApplicationStatus",
  roundExportCode: "exampleRoundExportCode",
  decisionConfirmedExportCode: "exampleDecisionConfirmedExportCode",
  birthdate: "exampleBirthdate",
  sex: "exampleSex",
  ipedsClassification: "exampleIpedsClassification",
  hispanic: "exampleHispanic",
  race: "exampleRace",
  citizenshipStatus: "exampleCitizenshipStatus",
  primaryCitizenship: "examplePrimaryCitizenship",
  secondaryCitizenship: "exampleSecondaryCitizenship",
  emailAddress: "exampleEmailAddress",
  phoneNumber: "examplePhoneNumber",
  mobilePhoneNumber: "exampleMobilePhoneNumber",
  mailingAddressStreet1: "exampleMailingAddressStreet1",
  mailingAddressStreet2: "exampleMailingAddressStreet2",
  mailingAddressStreet3: "exampleMailingAddressStreet3",
  mailingAddressCity: "exampleMailingAddressCity",
  mailingAddressRegion: "exampleMailingAddressRegion",
  mailingAddressPostalCode: "exampleMailingAddressPostalCode",
  mailingAddressCountryName: "exampleMailingAddressCountryName",
  mailingAddressGeomarket: "exampleMailingAddressGeomarket",
  mailingAddressValidFromDate: "exampleMailingAddressValidFromDate",
  mailingAddressValidToDate: "exampleMailingAddressValidToDate",
  mailingAddressCountryFipsCode: "exampleMailingAddressCountryFipsCode",
  mailingAddressCountryIso2Code: "exampleMailingAddressCountryIso2Code",
  mailingAddressCountryIso3Code: "exampleMailingAddressCountryIso3Code",
  mailingAddressCountrySisExport: "exampleMailingAddressCountrySisExport",
  permanentAddressStreet1: "examplePermanentAddressStreet1",
  permanentAddressStreet2: "examplePermanentAddressStreet2",
  permanentAddressStreet3: "examplePermanentAddressStreet3",
  permanentAddressCity: "examplePermanentAddressCity",
  permanentAddressRegion: "examplePermanentAddressRegion",
  permanentAddressPostalCode: "examplePermanentAddressPostalCode",
  permanentAddressCountry: "examplePermanentAddressCountry",
  permanentAddressGeomarket: "examplePermanentAddressGeomarket",
  permanentAddressCountryFipsCode: "examplePermanentAddressCountryFipsCode",
  permanentAddressCountryIso2Code: "examplePermanentAddressCountryIso2Code",
  permanentAddressCountryIso3Code: "examplePermanentAddressCountryIso3Code",
  permanentAddressCountrySisExport: "examplePermanentAddressCountrySisExport",
  language: "exampleLanguage",
  personalWebSite: "examplePersonalWebSite",
  reference1Waiver: "exampleReference1Waiver",
  reference2Waiver: "exampleReference2Waiver",
  reference3Waiver: "exampleReference3Waiver",
  id: "exampleId",
};

const service = {
  createPeSlateApp() {
    return CREATE_RESULT;
  },
  peSlateApps: () => FIND_MANY_RESULT,
  peSlateApp: ({ where }: { where: { id: string } }) => {
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

describe("PeSlateApp", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PeSlateAppService,
          useValue: service,
        },
      ],
      controllers: [PeSlateAppController],
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

  test("POST /peSlateApps", async () => {
    await request(app.getHttpServer())
      .post("/peSlateApps")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /peSlateApps", async () => {
    await request(app.getHttpServer())
      .get("/peSlateApps")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /peSlateApps/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/peSlateApps"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /peSlateApps/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/peSlateApps"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /peSlateApps existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/peSlateApps")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/peSlateApps")
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
