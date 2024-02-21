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
import { SlateToeflController } from "../slateToefl.controller";
import { SlateToeflService } from "../slateToefl.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  toeflTotal: "exampleToeflTotal",
  toeflListening: "exampleToeflListening",
  toeflReading: "exampleToeflReading",
  toeflStructureWrittenExpression: "exampleToeflStructureWrittenExpression",
  toeflSpeaking: "exampleToeflSpeaking",
  id: "exampleId",
};
const CREATE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  toeflTotal: "exampleToeflTotal",
  toeflListening: "exampleToeflListening",
  toeflReading: "exampleToeflReading",
  toeflStructureWrittenExpression: "exampleToeflStructureWrittenExpression",
  toeflSpeaking: "exampleToeflSpeaking",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    prefix: "examplePrefix",
    first: "exampleFirst",
    middle: "exampleMiddle",
    last: "exampleLast",
    toeflTotal: "exampleToeflTotal",
    toeflListening: "exampleToeflListening",
    toeflReading: "exampleToeflReading",
    toeflStructureWrittenExpression: "exampleToeflStructureWrittenExpression",
    toeflSpeaking: "exampleToeflSpeaking",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  toeflTotal: "exampleToeflTotal",
  toeflListening: "exampleToeflListening",
  toeflReading: "exampleToeflReading",
  toeflStructureWrittenExpression: "exampleToeflStructureWrittenExpression",
  toeflSpeaking: "exampleToeflSpeaking",
  id: "exampleId",
};

const service = {
  createSlateToefl() {
    return CREATE_RESULT;
  },
  slateToefls: () => FIND_MANY_RESULT,
  slateToefl: ({ where }: { where: { id: string } }) => {
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

describe("SlateToefl", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateToeflService,
          useValue: service,
        },
      ],
      controllers: [SlateToeflController],
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

  test("POST /slateToefls", async () => {
    await request(app.getHttpServer())
      .post("/slateToefls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateToefls", async () => {
    await request(app.getHttpServer())
      .get("/slateToefls")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateToefls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateToefls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateToefls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateToefls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateToefls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateToefls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateToefls")
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
