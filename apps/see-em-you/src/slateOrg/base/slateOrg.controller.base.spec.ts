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
import { SlateOrgController } from "../slateOrg.controller";
import { SlateOrgService } from "../slateOrg.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  status: "exampleStatus",
  localName: "exampleLocalName",
  sharedName: "exampleSharedName",
  street: "exampleStreet",
  city: "exampleCity",
  region: "exampleRegion",
  postal: "examplePostal",
  country: "exampleCountry",
  category: "exampleCategory",
  orgType: "exampleOrgType",
  numRecordsWithSchoolKeyInDatabase: "exampleNumRecordsWithSchoolKeyInDatabase",
  numActiveApplicationsWithSchoolKeyInDatabase:
    "exampleNumActiveApplicationsWithSchoolKeyInDatabase",
  id: "exampleId",
};
const CREATE_RESULT = {
  status: "exampleStatus",
  localName: "exampleLocalName",
  sharedName: "exampleSharedName",
  street: "exampleStreet",
  city: "exampleCity",
  region: "exampleRegion",
  postal: "examplePostal",
  country: "exampleCountry",
  category: "exampleCategory",
  orgType: "exampleOrgType",
  numRecordsWithSchoolKeyInDatabase: "exampleNumRecordsWithSchoolKeyInDatabase",
  numActiveApplicationsWithSchoolKeyInDatabase:
    "exampleNumActiveApplicationsWithSchoolKeyInDatabase",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    status: "exampleStatus",
    localName: "exampleLocalName",
    sharedName: "exampleSharedName",
    street: "exampleStreet",
    city: "exampleCity",
    region: "exampleRegion",
    postal: "examplePostal",
    country: "exampleCountry",
    category: "exampleCategory",
    orgType: "exampleOrgType",
    numRecordsWithSchoolKeyInDatabase:
      "exampleNumRecordsWithSchoolKeyInDatabase",
    numActiveApplicationsWithSchoolKeyInDatabase:
      "exampleNumActiveApplicationsWithSchoolKeyInDatabase",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  status: "exampleStatus",
  localName: "exampleLocalName",
  sharedName: "exampleSharedName",
  street: "exampleStreet",
  city: "exampleCity",
  region: "exampleRegion",
  postal: "examplePostal",
  country: "exampleCountry",
  category: "exampleCategory",
  orgType: "exampleOrgType",
  numRecordsWithSchoolKeyInDatabase: "exampleNumRecordsWithSchoolKeyInDatabase",
  numActiveApplicationsWithSchoolKeyInDatabase:
    "exampleNumActiveApplicationsWithSchoolKeyInDatabase",
  id: "exampleId",
};

const service = {
  createSlateOrg() {
    return CREATE_RESULT;
  },
  slateOrgs: () => FIND_MANY_RESULT,
  slateOrg: ({ where }: { where: { id: string } }) => {
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

describe("SlateOrg", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateOrgService,
          useValue: service,
        },
      ],
      controllers: [SlateOrgController],
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

  test("POST /slateOrgs", async () => {
    await request(app.getHttpServer())
      .post("/slateOrgs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateOrgs", async () => {
    await request(app.getHttpServer())
      .get("/slateOrgs")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateOrgs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateOrgs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateOrgs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateOrgs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateOrgs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateOrgs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateOrgs")
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
