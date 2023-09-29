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
import { DuolingoscoreController } from "../duolingoscore.controller";
import { DuolingoscoreService } from "../duolingoscore.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  duolingodataId: 42,
  id: 42,
  matchDate: new Date(),
  testdate: new Date(),
  testemail: "exampleTestemail",
};
const CREATE_RESULT = {
  applicationId: 42,
  duolingodataId: 42,
  id: 42,
  matchDate: new Date(),
  testdate: new Date(),
  testemail: "exampleTestemail",
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    duolingodataId: 42,
    id: 42,
    matchDate: new Date(),
    testdate: new Date(),
    testemail: "exampleTestemail",
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  duolingodataId: 42,
  id: 42,
  matchDate: new Date(),
  testdate: new Date(),
  testemail: "exampleTestemail",
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

describe("Duolingoscore", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DuolingoscoreService,
          useValue: service,
        },
      ],
      controllers: [DuolingoscoreController],
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

  test("POST /duolingoscores", async () => {
    await request(app.getHttpServer())
      .post("/duolingoscores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        matchDate: CREATE_RESULT.matchDate.toISOString(),
        testdate: CREATE_RESULT.testdate.toISOString(),
      });
  });

  test("GET /duolingoscores", async () => {
    await request(app.getHttpServer())
      .get("/duolingoscores")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          matchDate: FIND_MANY_RESULT[0].matchDate.toISOString(),
          testdate: FIND_MANY_RESULT[0].testdate.toISOString(),
        },
      ]);
  });

  test("GET /duolingoscores/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/duolingoscores"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /duolingoscores/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/duolingoscores"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        matchDate: FIND_ONE_RESULT.matchDate.toISOString(),
        testdate: FIND_ONE_RESULT.testdate.toISOString(),
      });
  });

  test("POST /duolingoscores existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/duolingoscores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        matchDate: CREATE_RESULT.matchDate.toISOString(),
        testdate: CREATE_RESULT.testdate.toISOString(),
      })
      .then(function () {
        agent
          .post("/duolingoscores")
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
