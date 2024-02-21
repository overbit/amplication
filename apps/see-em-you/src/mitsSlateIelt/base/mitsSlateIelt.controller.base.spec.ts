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
import { MitsSlateIeltController } from "../mitsSlateIelt.controller";
import { MitsSlateIeltService } from "../mitsSlateIelt.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  ieltsOverallBandScore: "exampleIeltsOverallBandScore",
  ieltsListening: "exampleIeltsListening",
  ieltsReading: "exampleIeltsReading",
  ieltsWriting: "exampleIeltsWriting",
  ieltsSpeaking: "exampleIeltsSpeaking",
  id: "exampleId",
};
const CREATE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  ieltsOverallBandScore: "exampleIeltsOverallBandScore",
  ieltsListening: "exampleIeltsListening",
  ieltsReading: "exampleIeltsReading",
  ieltsWriting: "exampleIeltsWriting",
  ieltsSpeaking: "exampleIeltsSpeaking",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    prefix: "examplePrefix",
    first: "exampleFirst",
    middle: "exampleMiddle",
    last: "exampleLast",
    ieltsOverallBandScore: "exampleIeltsOverallBandScore",
    ieltsListening: "exampleIeltsListening",
    ieltsReading: "exampleIeltsReading",
    ieltsWriting: "exampleIeltsWriting",
    ieltsSpeaking: "exampleIeltsSpeaking",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  ieltsOverallBandScore: "exampleIeltsOverallBandScore",
  ieltsListening: "exampleIeltsListening",
  ieltsReading: "exampleIeltsReading",
  ieltsWriting: "exampleIeltsWriting",
  ieltsSpeaking: "exampleIeltsSpeaking",
  id: "exampleId",
};

const service = {
  createMitsSlateIelt() {
    return CREATE_RESULT;
  },
  mitsSlateIelts: () => FIND_MANY_RESULT,
  mitsSlateIelt: ({ where }: { where: { id: string } }) => {
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

describe("MitsSlateIelt", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MitsSlateIeltService,
          useValue: service,
        },
      ],
      controllers: [MitsSlateIeltController],
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

  test("POST /mitsSlateIelts", async () => {
    await request(app.getHttpServer())
      .post("/mitsSlateIelts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mitsSlateIelts", async () => {
    await request(app.getHttpServer())
      .get("/mitsSlateIelts")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mitsSlateIelts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mitsSlateIelts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mitsSlateIelts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mitsSlateIelts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mitsSlateIelts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mitsSlateIelts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mitsSlateIelts")
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
