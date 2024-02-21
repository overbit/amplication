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
import { TestusersInfoController } from "../testusersInfo.controller";
import { TestusersInfoService } from "../testusersInfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  userId: 42,
  gender: "exampleGender",
  dob: new Date(),
  addressCurStreet1: "exampleAddressCurStreet1",
  addressCurStreet2: "exampleAddressCurStreet2",
  addressCurStreet3: "exampleAddressCurStreet3",
  addressCurStreet4: "exampleAddressCurStreet4",
  addressCurCity: "exampleAddressCurCity",
  addressCurState: 42,
  addressCurPcode: "exampleAddressCurPcode",
  addressCurCountry: 42,
  addressCurTel: "exampleAddressCurTel",
  addressCurTelMobile: "exampleAddressCurTelMobile",
  addressCurTelWork: "exampleAddressCurTelWork",
  addressPermStreet1: "exampleAddressPermStreet1",
  addressPermStreet2: "exampleAddressPermStreet2",
  addressPermStreet3: "exampleAddressPermStreet3",
  addressPermStreet4: "exampleAddressPermStreet4",
  addressPermCity: "exampleAddressPermCity",
  addressPermState: 42,
  addressPermPcode: "exampleAddressPermPcode",
  addressPermCountry: 42,
  addressPermTel: "exampleAddressPermTel",
  addressPermTelMobile: "exampleAddressPermTelMobile",
  addressPermTelWork: "exampleAddressPermTelWork",
  ethnicity: 42,
  ethtest: 42,
  visastatus: 42,
  company: "exampleCompany",
  buckleyWaive: "true",
  homepage: "exampleHomepage",
  citCountry: 42,
  additionalinfo: "exampleAdditionalinfo",
  curPaRes: "exampleCurPaRes",
  id: 42,
};
const CREATE_RESULT = {
  userId: 42,
  gender: "exampleGender",
  dob: new Date(),
  addressCurStreet1: "exampleAddressCurStreet1",
  addressCurStreet2: "exampleAddressCurStreet2",
  addressCurStreet3: "exampleAddressCurStreet3",
  addressCurStreet4: "exampleAddressCurStreet4",
  addressCurCity: "exampleAddressCurCity",
  addressCurState: 42,
  addressCurPcode: "exampleAddressCurPcode",
  addressCurCountry: 42,
  addressCurTel: "exampleAddressCurTel",
  addressCurTelMobile: "exampleAddressCurTelMobile",
  addressCurTelWork: "exampleAddressCurTelWork",
  addressPermStreet1: "exampleAddressPermStreet1",
  addressPermStreet2: "exampleAddressPermStreet2",
  addressPermStreet3: "exampleAddressPermStreet3",
  addressPermStreet4: "exampleAddressPermStreet4",
  addressPermCity: "exampleAddressPermCity",
  addressPermState: 42,
  addressPermPcode: "exampleAddressPermPcode",
  addressPermCountry: 42,
  addressPermTel: "exampleAddressPermTel",
  addressPermTelMobile: "exampleAddressPermTelMobile",
  addressPermTelWork: "exampleAddressPermTelWork",
  ethnicity: 42,
  ethtest: 42,
  visastatus: 42,
  company: "exampleCompany",
  buckleyWaive: "true",
  homepage: "exampleHomepage",
  citCountry: 42,
  additionalinfo: "exampleAdditionalinfo",
  curPaRes: "exampleCurPaRes",
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    userId: 42,
    gender: "exampleGender",
    dob: new Date(),
    addressCurStreet1: "exampleAddressCurStreet1",
    addressCurStreet2: "exampleAddressCurStreet2",
    addressCurStreet3: "exampleAddressCurStreet3",
    addressCurStreet4: "exampleAddressCurStreet4",
    addressCurCity: "exampleAddressCurCity",
    addressCurState: 42,
    addressCurPcode: "exampleAddressCurPcode",
    addressCurCountry: 42,
    addressCurTel: "exampleAddressCurTel",
    addressCurTelMobile: "exampleAddressCurTelMobile",
    addressCurTelWork: "exampleAddressCurTelWork",
    addressPermStreet1: "exampleAddressPermStreet1",
    addressPermStreet2: "exampleAddressPermStreet2",
    addressPermStreet3: "exampleAddressPermStreet3",
    addressPermStreet4: "exampleAddressPermStreet4",
    addressPermCity: "exampleAddressPermCity",
    addressPermState: 42,
    addressPermPcode: "exampleAddressPermPcode",
    addressPermCountry: 42,
    addressPermTel: "exampleAddressPermTel",
    addressPermTelMobile: "exampleAddressPermTelMobile",
    addressPermTelWork: "exampleAddressPermTelWork",
    ethnicity: 42,
    ethtest: 42,
    visastatus: 42,
    company: "exampleCompany",
    buckleyWaive: "true",
    homepage: "exampleHomepage",
    citCountry: 42,
    additionalinfo: "exampleAdditionalinfo",
    curPaRes: "exampleCurPaRes",
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  userId: 42,
  gender: "exampleGender",
  dob: new Date(),
  addressCurStreet1: "exampleAddressCurStreet1",
  addressCurStreet2: "exampleAddressCurStreet2",
  addressCurStreet3: "exampleAddressCurStreet3",
  addressCurStreet4: "exampleAddressCurStreet4",
  addressCurCity: "exampleAddressCurCity",
  addressCurState: 42,
  addressCurPcode: "exampleAddressCurPcode",
  addressCurCountry: 42,
  addressCurTel: "exampleAddressCurTel",
  addressCurTelMobile: "exampleAddressCurTelMobile",
  addressCurTelWork: "exampleAddressCurTelWork",
  addressPermStreet1: "exampleAddressPermStreet1",
  addressPermStreet2: "exampleAddressPermStreet2",
  addressPermStreet3: "exampleAddressPermStreet3",
  addressPermStreet4: "exampleAddressPermStreet4",
  addressPermCity: "exampleAddressPermCity",
  addressPermState: 42,
  addressPermPcode: "exampleAddressPermPcode",
  addressPermCountry: 42,
  addressPermTel: "exampleAddressPermTel",
  addressPermTelMobile: "exampleAddressPermTelMobile",
  addressPermTelWork: "exampleAddressPermTelWork",
  ethnicity: 42,
  ethtest: 42,
  visastatus: 42,
  company: "exampleCompany",
  buckleyWaive: "true",
  homepage: "exampleHomepage",
  citCountry: 42,
  additionalinfo: "exampleAdditionalinfo",
  curPaRes: "exampleCurPaRes",
  id: 42,
};

const service = {
  createTestusersInfo() {
    return CREATE_RESULT;
  },
  testusersInfos: () => FIND_MANY_RESULT,
  testusersInfo: ({ where }: { where: { id: string } }) => {
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

describe("TestusersInfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TestusersInfoService,
          useValue: service,
        },
      ],
      controllers: [TestusersInfoController],
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

  test("POST /testusersInfos", async () => {
    await request(app.getHttpServer())
      .post("/testusersInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dob: CREATE_RESULT.dob.toISOString(),
      });
  });

  test("GET /testusersInfos", async () => {
    await request(app.getHttpServer())
      .get("/testusersInfos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          dob: FIND_MANY_RESULT[0].dob.toISOString(),
        },
      ]);
  });

  test("GET /testusersInfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/testusersInfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /testusersInfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/testusersInfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        dob: FIND_ONE_RESULT.dob.toISOString(),
      });
  });

  test("POST /testusersInfos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/testusersInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dob: CREATE_RESULT.dob.toISOString(),
      })
      .then(function () {
        agent
          .post("/testusersInfos")
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
