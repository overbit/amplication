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
import { IeltsscoreController } from "../ieltsscore.controller";
import { IeltsscoreService } from "../ieltsscore.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  datafileId: 42,
  id: 42,
  listeningscore: 42.424242424,
  overallscore: 42.424242424,
  readingscore: 42.424242424,
  scorereceived: 42,
  speakingscore: 42.424242424,
  testdate: new Date(),
  testEmail: "exampleTestEmail",
  writingscore: 42.424242424,
};
const CREATE_RESULT = {
  datafileId: 42,
  id: 42,
  listeningscore: 42.424242424,
  overallscore: 42.424242424,
  readingscore: 42.424242424,
  scorereceived: 42,
  speakingscore: 42.424242424,
  testdate: new Date(),
  testEmail: "exampleTestEmail",
  writingscore: 42.424242424,
};
const FIND_MANY_RESULT = [
  {
    datafileId: 42,
    id: 42,
    listeningscore: 42.424242424,
    overallscore: 42.424242424,
    readingscore: 42.424242424,
    scorereceived: 42,
    speakingscore: 42.424242424,
    testdate: new Date(),
    testEmail: "exampleTestEmail",
    writingscore: 42.424242424,
  },
];
const FIND_ONE_RESULT = {
  datafileId: 42,
  id: 42,
  listeningscore: 42.424242424,
  overallscore: 42.424242424,
  readingscore: 42.424242424,
  scorereceived: 42,
  speakingscore: 42.424242424,
  testdate: new Date(),
  testEmail: "exampleTestEmail",
  writingscore: 42.424242424,
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

describe("Ieltsscore", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: IeltsscoreService,
          useValue: service,
        },
      ],
      controllers: [IeltsscoreController],
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

  test("POST /ieltsscores", async () => {
    await request(app.getHttpServer())
      .post("/ieltsscores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testdate: CREATE_RESULT.testdate.toISOString(),
      });
  });

  test("GET /ieltsscores", async () => {
    await request(app.getHttpServer())
      .get("/ieltsscores")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          testdate: FIND_MANY_RESULT[0].testdate.toISOString(),
        },
      ]);
  });

  test("GET /ieltsscores/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ieltsscores"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ieltsscores/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ieltsscores"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        testdate: FIND_ONE_RESULT.testdate.toISOString(),
      });
  });

  test("POST /ieltsscores existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ieltsscores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testdate: CREATE_RESULT.testdate.toISOString(),
      })
      .then(function () {
        agent
          .post("/ieltsscores")
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
