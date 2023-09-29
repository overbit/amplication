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
import { ToeflController } from "../toefl.controller";
import { ToeflService } from "../toefl.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  datafileId: 42,
  essay: 42.424242424,
  essaymb: 42,
  id: 42,
  scorereceived: "true",
  section1: 42,
  section1mb: 42,
  section2: 42,
  section2mb: 42,
  section3: 42,
  section3mb: 42,
  testdate: new Date(),
  toeflEmail: "exampleToeflEmail",
  toeflPaperEmail: "exampleToeflPaperEmail",
  total: 42,
  totalmb: 42,
  typeField: "exampleTypeField",
};
const CREATE_RESULT = {
  applicationId: 42,
  datafileId: 42,
  essay: 42.424242424,
  essaymb: 42,
  id: 42,
  scorereceived: "true",
  section1: 42,
  section1mb: 42,
  section2: 42,
  section2mb: 42,
  section3: 42,
  section3mb: 42,
  testdate: new Date(),
  toeflEmail: "exampleToeflEmail",
  toeflPaperEmail: "exampleToeflPaperEmail",
  total: 42,
  totalmb: 42,
  typeField: "exampleTypeField",
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    datafileId: 42,
    essay: 42.424242424,
    essaymb: 42,
    id: 42,
    scorereceived: "true",
    section1: 42,
    section1mb: 42,
    section2: 42,
    section2mb: 42,
    section3: 42,
    section3mb: 42,
    testdate: new Date(),
    toeflEmail: "exampleToeflEmail",
    toeflPaperEmail: "exampleToeflPaperEmail",
    total: 42,
    totalmb: 42,
    typeField: "exampleTypeField",
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  datafileId: 42,
  essay: 42.424242424,
  essaymb: 42,
  id: 42,
  scorereceived: "true",
  section1: 42,
  section1mb: 42,
  section2: 42,
  section2mb: 42,
  section3: 42,
  section3mb: 42,
  testdate: new Date(),
  toeflEmail: "exampleToeflEmail",
  toeflPaperEmail: "exampleToeflPaperEmail",
  total: 42,
  totalmb: 42,
  typeField: "exampleTypeField",
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

describe("Toefl", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ToeflService,
          useValue: service,
        },
      ],
      controllers: [ToeflController],
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

  test("POST /toefls", async () => {
    await request(app.getHttpServer())
      .post("/toefls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testdate: CREATE_RESULT.testdate.toISOString(),
      });
  });

  test("GET /toefls", async () => {
    await request(app.getHttpServer())
      .get("/toefls")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          testdate: FIND_MANY_RESULT[0].testdate.toISOString(),
        },
      ]);
  });

  test("GET /toefls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/toefls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /toefls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/toefls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        testdate: FIND_ONE_RESULT.testdate.toISOString(),
      });
  });

  test("POST /toefls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/toefls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testdate: CREATE_RESULT.testdate.toISOString(),
      })
      .then(function () {
        agent
          .post("/toefls")
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
