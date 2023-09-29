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
import { UsersInfoController } from "../usersInfo.controller";
import { UsersInfoService } from "../usersInfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  additionalinfo: "exampleAdditionalinfo",
  addressCurCity: "exampleAddressCurCity",
  addressCurCountry: 42,
  addressCurPcode: "exampleAddressCurPcode",
  addressCurState: 42,
  addressCurStreet1: "exampleAddressCurStreet1",
  addressCurStreet2: "exampleAddressCurStreet2",
  addressCurStreet3: "exampleAddressCurStreet3",
  addressCurStreet4: "exampleAddressCurStreet4",
  addressCurTel: "exampleAddressCurTel",
  addressCurTelMobile: "exampleAddressCurTelMobile",
  addressCurTelWork: "exampleAddressCurTelWork",
  addressPermCity: "exampleAddressPermCity",
  addressPermCountry: 42,
  addressPermPcode: "exampleAddressPermPcode",
  addressPermState: 42,
  addressPermStreet1: "exampleAddressPermStreet1",
  addressPermStreet2: "exampleAddressPermStreet2",
  addressPermStreet3: "exampleAddressPermStreet3",
  addressPermStreet4: "exampleAddressPermStreet4",
  addressPermTel: "exampleAddressPermTel",
  addressPermTelMobile: "exampleAddressPermTelMobile",
  addressPermTelWork: "exampleAddressPermTelWork",
  buckleyWaive: "true",
  citCountry: 42,
  citCountrySecond: 42,
  company: "exampleCompany",
  curPaRes: "exampleCurPaRes",
  dob: new Date(),
  ethnicity: 42,
  firstGenGrad: "true",
  firstGenUgrad: "true",
  gender: "exampleGender",
  homepage: "exampleHomepage",
  id: 42,
  nativeTongue: "exampleNativeTongue",
  qqNumber: "exampleQqNumber",
  selfGender: "exampleSelfGender",
  selfGenderOther: "exampleSelfGenderOther",
  usCitizenOrPermanentResident: 42,
  userId: 42,
  usPerm: 42,
  visastatus: 42,
};
const CREATE_RESULT = {
  additionalinfo: "exampleAdditionalinfo",
  addressCurCity: "exampleAddressCurCity",
  addressCurCountry: 42,
  addressCurPcode: "exampleAddressCurPcode",
  addressCurState: 42,
  addressCurStreet1: "exampleAddressCurStreet1",
  addressCurStreet2: "exampleAddressCurStreet2",
  addressCurStreet3: "exampleAddressCurStreet3",
  addressCurStreet4: "exampleAddressCurStreet4",
  addressCurTel: "exampleAddressCurTel",
  addressCurTelMobile: "exampleAddressCurTelMobile",
  addressCurTelWork: "exampleAddressCurTelWork",
  addressPermCity: "exampleAddressPermCity",
  addressPermCountry: 42,
  addressPermPcode: "exampleAddressPermPcode",
  addressPermState: 42,
  addressPermStreet1: "exampleAddressPermStreet1",
  addressPermStreet2: "exampleAddressPermStreet2",
  addressPermStreet3: "exampleAddressPermStreet3",
  addressPermStreet4: "exampleAddressPermStreet4",
  addressPermTel: "exampleAddressPermTel",
  addressPermTelMobile: "exampleAddressPermTelMobile",
  addressPermTelWork: "exampleAddressPermTelWork",
  buckleyWaive: "true",
  citCountry: 42,
  citCountrySecond: 42,
  company: "exampleCompany",
  curPaRes: "exampleCurPaRes",
  dob: new Date(),
  ethnicity: 42,
  firstGenGrad: "true",
  firstGenUgrad: "true",
  gender: "exampleGender",
  homepage: "exampleHomepage",
  id: 42,
  nativeTongue: "exampleNativeTongue",
  qqNumber: "exampleQqNumber",
  selfGender: "exampleSelfGender",
  selfGenderOther: "exampleSelfGenderOther",
  usCitizenOrPermanentResident: 42,
  userId: 42,
  usPerm: 42,
  visastatus: 42,
};
const FIND_MANY_RESULT = [
  {
    additionalinfo: "exampleAdditionalinfo",
    addressCurCity: "exampleAddressCurCity",
    addressCurCountry: 42,
    addressCurPcode: "exampleAddressCurPcode",
    addressCurState: 42,
    addressCurStreet1: "exampleAddressCurStreet1",
    addressCurStreet2: "exampleAddressCurStreet2",
    addressCurStreet3: "exampleAddressCurStreet3",
    addressCurStreet4: "exampleAddressCurStreet4",
    addressCurTel: "exampleAddressCurTel",
    addressCurTelMobile: "exampleAddressCurTelMobile",
    addressCurTelWork: "exampleAddressCurTelWork",
    addressPermCity: "exampleAddressPermCity",
    addressPermCountry: 42,
    addressPermPcode: "exampleAddressPermPcode",
    addressPermState: 42,
    addressPermStreet1: "exampleAddressPermStreet1",
    addressPermStreet2: "exampleAddressPermStreet2",
    addressPermStreet3: "exampleAddressPermStreet3",
    addressPermStreet4: "exampleAddressPermStreet4",
    addressPermTel: "exampleAddressPermTel",
    addressPermTelMobile: "exampleAddressPermTelMobile",
    addressPermTelWork: "exampleAddressPermTelWork",
    buckleyWaive: "true",
    citCountry: 42,
    citCountrySecond: 42,
    company: "exampleCompany",
    curPaRes: "exampleCurPaRes",
    dob: new Date(),
    ethnicity: 42,
    firstGenGrad: "true",
    firstGenUgrad: "true",
    gender: "exampleGender",
    homepage: "exampleHomepage",
    id: 42,
    nativeTongue: "exampleNativeTongue",
    qqNumber: "exampleQqNumber",
    selfGender: "exampleSelfGender",
    selfGenderOther: "exampleSelfGenderOther",
    usCitizenOrPermanentResident: 42,
    userId: 42,
    usPerm: 42,
    visastatus: 42,
  },
];
const FIND_ONE_RESULT = {
  additionalinfo: "exampleAdditionalinfo",
  addressCurCity: "exampleAddressCurCity",
  addressCurCountry: 42,
  addressCurPcode: "exampleAddressCurPcode",
  addressCurState: 42,
  addressCurStreet1: "exampleAddressCurStreet1",
  addressCurStreet2: "exampleAddressCurStreet2",
  addressCurStreet3: "exampleAddressCurStreet3",
  addressCurStreet4: "exampleAddressCurStreet4",
  addressCurTel: "exampleAddressCurTel",
  addressCurTelMobile: "exampleAddressCurTelMobile",
  addressCurTelWork: "exampleAddressCurTelWork",
  addressPermCity: "exampleAddressPermCity",
  addressPermCountry: 42,
  addressPermPcode: "exampleAddressPermPcode",
  addressPermState: 42,
  addressPermStreet1: "exampleAddressPermStreet1",
  addressPermStreet2: "exampleAddressPermStreet2",
  addressPermStreet3: "exampleAddressPermStreet3",
  addressPermStreet4: "exampleAddressPermStreet4",
  addressPermTel: "exampleAddressPermTel",
  addressPermTelMobile: "exampleAddressPermTelMobile",
  addressPermTelWork: "exampleAddressPermTelWork",
  buckleyWaive: "true",
  citCountry: 42,
  citCountrySecond: 42,
  company: "exampleCompany",
  curPaRes: "exampleCurPaRes",
  dob: new Date(),
  ethnicity: 42,
  firstGenGrad: "true",
  firstGenUgrad: "true",
  gender: "exampleGender",
  homepage: "exampleHomepage",
  id: 42,
  nativeTongue: "exampleNativeTongue",
  qqNumber: "exampleQqNumber",
  selfGender: "exampleSelfGender",
  selfGenderOther: "exampleSelfGenderOther",
  usCitizenOrPermanentResident: 42,
  userId: 42,
  usPerm: 42,
  visastatus: 42,
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

describe("UsersInfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UsersInfoService,
          useValue: service,
        },
      ],
      controllers: [UsersInfoController],
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

  test("POST /usersInfos", async () => {
    await request(app.getHttpServer())
      .post("/usersInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dob: CREATE_RESULT.dob.toISOString(),
      });
  });

  test("GET /usersInfos", async () => {
    await request(app.getHttpServer())
      .get("/usersInfos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          dob: FIND_MANY_RESULT[0].dob.toISOString(),
        },
      ]);
  });

  test("GET /usersInfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/usersInfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /usersInfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/usersInfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        dob: FIND_ONE_RESULT.dob.toISOString(),
      });
  });

  test("POST /usersInfos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/usersInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dob: CREATE_RESULT.dob.toISOString(),
      })
      .then(function () {
        agent
          .post("/usersInfos")
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
