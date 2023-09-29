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
import { ToeflItpPlusController } from "../toeflItpPlus.controller";
import { ToeflItpPlusService } from "../toeflItpPlus.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  datafileId: 42,
  id: 42,
  listeningscore: 42,
  overallscore: 42,
  readingscore: 42,
  scorereceived: 42,
  testdate: new Date(),
  testEmail: "exampleTestEmail",
  url: "exampleUrl",
  writingscore: 42,
};
const CREATE_RESULT = {
  applicationId: 42,
  datafileId: 42,
  id: 42,
  listeningscore: 42,
  overallscore: 42,
  readingscore: 42,
  scorereceived: 42,
  testdate: new Date(),
  testEmail: "exampleTestEmail",
  url: "exampleUrl",
  writingscore: 42,
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    datafileId: 42,
    id: 42,
    listeningscore: 42,
    overallscore: 42,
    readingscore: 42,
    scorereceived: 42,
    testdate: new Date(),
    testEmail: "exampleTestEmail",
    url: "exampleUrl",
    writingscore: 42,
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  datafileId: 42,
  id: 42,
  listeningscore: 42,
  overallscore: 42,
  readingscore: 42,
  scorereceived: 42,
  testdate: new Date(),
  testEmail: "exampleTestEmail",
  url: "exampleUrl",
  writingscore: 42,
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

describe("ToeflItpPlus", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ToeflItpPlusService,
          useValue: service,
        },
      ],
      controllers: [ToeflItpPlusController],
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

  test("POST /toeflItpPluses", async () => {
    await request(app.getHttpServer())
      .post("/toeflItpPluses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testdate: CREATE_RESULT.testdate.toISOString(),
      });
  });

  test("GET /toeflItpPluses", async () => {
    await request(app.getHttpServer())
      .get("/toeflItpPluses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          testdate: FIND_MANY_RESULT[0].testdate.toISOString(),
        },
      ]);
  });

  test("GET /toeflItpPluses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/toeflItpPluses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /toeflItpPluses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/toeflItpPluses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        testdate: FIND_ONE_RESULT.testdate.toISOString(),
      });
  });

  test("POST /toeflItpPluses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/toeflItpPluses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testdate: CREATE_RESULT.testdate.toISOString(),
      })
      .then(function () {
        agent
          .post("/toeflItpPluses")
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
