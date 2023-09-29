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
import { SystemenvController } from "../systemenv.controller";
import { SystemenvService } from "../systemenv.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  appbaseprice: 42.424242424,
  coorduserId: 42,
  domainId: 42,
  expdate: new Date(),
  expdate2: new Date(),
  id: 42,
  sysemail: "exampleSysemail",
};
const CREATE_RESULT = {
  appbaseprice: 42.424242424,
  coorduserId: 42,
  domainId: 42,
  expdate: new Date(),
  expdate2: new Date(),
  id: 42,
  sysemail: "exampleSysemail",
};
const FIND_MANY_RESULT = [
  {
    appbaseprice: 42.424242424,
    coorduserId: 42,
    domainId: 42,
    expdate: new Date(),
    expdate2: new Date(),
    id: 42,
    sysemail: "exampleSysemail",
  },
];
const FIND_ONE_RESULT = {
  appbaseprice: 42.424242424,
  coorduserId: 42,
  domainId: 42,
  expdate: new Date(),
  expdate2: new Date(),
  id: 42,
  sysemail: "exampleSysemail",
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

describe("Systemenv", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SystemenvService,
          useValue: service,
        },
      ],
      controllers: [SystemenvController],
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

  test("POST /systemenvs", async () => {
    await request(app.getHttpServer())
      .post("/systemenvs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expdate: CREATE_RESULT.expdate.toISOString(),
        expdate2: CREATE_RESULT.expdate2.toISOString(),
      });
  });

  test("GET /systemenvs", async () => {
    await request(app.getHttpServer())
      .get("/systemenvs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          expdate: FIND_MANY_RESULT[0].expdate.toISOString(),
          expdate2: FIND_MANY_RESULT[0].expdate2.toISOString(),
        },
      ]);
  });

  test("GET /systemenvs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/systemenvs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /systemenvs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/systemenvs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        expdate: FIND_ONE_RESULT.expdate.toISOString(),
        expdate2: FIND_ONE_RESULT.expdate2.toISOString(),
      });
  });

  test("POST /systemenvs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/systemenvs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expdate: CREATE_RESULT.expdate.toISOString(),
        expdate2: CREATE_RESULT.expdate2.toISOString(),
      })
      .then(function () {
        agent
          .post("/systemenvs")
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
