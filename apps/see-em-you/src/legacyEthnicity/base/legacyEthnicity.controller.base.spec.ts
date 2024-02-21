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
import { LegacyEthnicityController } from "../legacyEthnicity.controller";
import { LegacyEthnicityService } from "../legacyEthnicity.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  name: "exampleName",
  sortorder: 42,
  ethnicityId: 42,
  id: 42,
};
const CREATE_RESULT = {
  name: "exampleName",
  sortorder: 42,
  ethnicityId: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    name: "exampleName",
    sortorder: 42,
    ethnicityId: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  name: "exampleName",
  sortorder: 42,
  ethnicityId: 42,
  id: 42,
};

const service = {
  createLegacyEthnicity() {
    return CREATE_RESULT;
  },
  legacyEthnicities: () => FIND_MANY_RESULT,
  legacyEthnicity: ({ where }: { where: { id: string } }) => {
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

describe("LegacyEthnicity", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LegacyEthnicityService,
          useValue: service,
        },
      ],
      controllers: [LegacyEthnicityController],
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

  test("POST /legacyEthnicities", async () => {
    await request(app.getHttpServer())
      .post("/legacyEthnicities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /legacyEthnicities", async () => {
    await request(app.getHttpServer())
      .get("/legacyEthnicities")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /legacyEthnicities/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/legacyEthnicities"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /legacyEthnicities/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/legacyEthnicities"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /legacyEthnicities existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/legacyEthnicities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/legacyEthnicities")
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
