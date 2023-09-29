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
import { SlateIeltController } from "../slateIelt.controller";
import { SlateIeltService } from "../slateIelt.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  first: "exampleFirst",
  id: "exampleId",
  ieltsListening: "exampleIeltsListening",
  ieltsOverallBandScore: "exampleIeltsOverallBandScore",
  ieltsReading: "exampleIeltsReading",
  ieltsSpeaking: "exampleIeltsSpeaking",
  ieltsWriting: "exampleIeltsWriting",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
};
const CREATE_RESULT = {
  first: "exampleFirst",
  id: "exampleId",
  ieltsListening: "exampleIeltsListening",
  ieltsOverallBandScore: "exampleIeltsOverallBandScore",
  ieltsReading: "exampleIeltsReading",
  ieltsSpeaking: "exampleIeltsSpeaking",
  ieltsWriting: "exampleIeltsWriting",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
};
const FIND_MANY_RESULT = [
  {
    first: "exampleFirst",
    id: "exampleId",
    ieltsListening: "exampleIeltsListening",
    ieltsOverallBandScore: "exampleIeltsOverallBandScore",
    ieltsReading: "exampleIeltsReading",
    ieltsSpeaking: "exampleIeltsSpeaking",
    ieltsWriting: "exampleIeltsWriting",
    last: "exampleLast",
    middle: "exampleMiddle",
    prefix: "examplePrefix",
  },
];
const FIND_ONE_RESULT = {
  first: "exampleFirst",
  id: "exampleId",
  ieltsListening: "exampleIeltsListening",
  ieltsOverallBandScore: "exampleIeltsOverallBandScore",
  ieltsReading: "exampleIeltsReading",
  ieltsSpeaking: "exampleIeltsSpeaking",
  ieltsWriting: "exampleIeltsWriting",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
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

describe("SlateIelt", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateIeltService,
          useValue: service,
        },
      ],
      controllers: [SlateIeltController],
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

  test("POST /slateIelts", async () => {
    await request(app.getHttpServer())
      .post("/slateIelts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateIelts", async () => {
    await request(app.getHttpServer())
      .get("/slateIelts")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateIelts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateIelts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateIelts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateIelts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateIelts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateIelts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateIelts")
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
