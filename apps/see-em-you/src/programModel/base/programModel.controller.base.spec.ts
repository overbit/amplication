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
import { ProgramModelController } from "../programModel.controller";
import { ProgramModelService } from "../programModel.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  baseprice: 42.424242424,
  basepriceLate: 42.424242424,
  description: "exampleDescription",
  enabled: "exampleEnabled",
  id: 42,
  linkword: "exampleLinkword",
  oraclestring: "exampleOraclestring",
  prank: 42,
  programprice: 42.424242424,
  programpriceLate: 42.424242424,
  registrationoraclestring: "exampleRegistrationoraclestring",
  url: "exampleUrl",
};
const CREATE_RESULT = {
  baseprice: 42.424242424,
  basepriceLate: 42.424242424,
  description: "exampleDescription",
  enabled: "exampleEnabled",
  id: 42,
  linkword: "exampleLinkword",
  oraclestring: "exampleOraclestring",
  prank: 42,
  programprice: 42.424242424,
  programpriceLate: 42.424242424,
  registrationoraclestring: "exampleRegistrationoraclestring",
  url: "exampleUrl",
};
const FIND_MANY_RESULT = [
  {
    baseprice: 42.424242424,
    basepriceLate: 42.424242424,
    description: "exampleDescription",
    enabled: "exampleEnabled",
    id: 42,
    linkword: "exampleLinkword",
    oraclestring: "exampleOraclestring",
    prank: 42,
    programprice: 42.424242424,
    programpriceLate: 42.424242424,
    registrationoraclestring: "exampleRegistrationoraclestring",
    url: "exampleUrl",
  },
];
const FIND_ONE_RESULT = {
  baseprice: 42.424242424,
  basepriceLate: 42.424242424,
  description: "exampleDescription",
  enabled: "exampleEnabled",
  id: 42,
  linkword: "exampleLinkword",
  oraclestring: "exampleOraclestring",
  prank: 42,
  programprice: 42.424242424,
  programpriceLate: 42.424242424,
  registrationoraclestring: "exampleRegistrationoraclestring",
  url: "exampleUrl",
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

describe("ProgramModel", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProgramModelService,
          useValue: service,
        },
      ],
      controllers: [ProgramModelController],
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

  test("POST /programModels", async () => {
    await request(app.getHttpServer())
      .post("/programModels")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /programModels", async () => {
    await request(app.getHttpServer())
      .get("/programModels")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /programModels/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/programModels"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /programModels/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/programModels"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /programModels existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/programModels")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/programModels")
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
