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
import { MitsSlateToeflController } from "../mitsSlateToefl.controller";
import { MitsSlateToeflService } from "../mitsSlateToefl.service";

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
  createMitsSlateToefl() {
    return CREATE_RESULT;
  },
  mitsSlateToefls: () => FIND_MANY_RESULT,
  mitsSlateToefl: ({ where }: { where: { id: string } }) => {
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

describe("MitsSlateToefl", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MitsSlateToeflService,
          useValue: service,
        },
      ],
      controllers: [MitsSlateToeflController],
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

  test("POST /mitsSlateToefls", async () => {
    await request(app.getHttpServer())
      .post("/mitsSlateToefls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mitsSlateToefls", async () => {
    await request(app.getHttpServer())
      .get("/mitsSlateToefls")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mitsSlateToefls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mitsSlateToefls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mitsSlateToefls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mitsSlateToefls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mitsSlateToefls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mitsSlateToefls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mitsSlateToefls")
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
