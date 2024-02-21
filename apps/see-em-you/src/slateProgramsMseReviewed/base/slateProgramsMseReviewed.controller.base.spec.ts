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
import { SlateProgramsMseReviewedController } from "../slateProgramsMseReviewed.controller";
import { SlateProgramsMseReviewedService } from "../slateProgramsMseReviewed.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  mseProgram1: "exampleMseProgram1",
  mseProgram2: "exampleMseProgram2",
  mseProgram3: "exampleMseProgram3",
  id: "exampleId",
};
const CREATE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  mseProgram1: "exampleMseProgram1",
  mseProgram2: "exampleMseProgram2",
  mseProgram3: "exampleMseProgram3",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    prefix: "examplePrefix",
    first: "exampleFirst",
    middle: "exampleMiddle",
    last: "exampleLast",
    mseProgram1: "exampleMseProgram1",
    mseProgram2: "exampleMseProgram2",
    mseProgram3: "exampleMseProgram3",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  mseProgram1: "exampleMseProgram1",
  mseProgram2: "exampleMseProgram2",
  mseProgram3: "exampleMseProgram3",
  id: "exampleId",
};

const service = {
  createSlateProgramsMseReviewed() {
    return CREATE_RESULT;
  },
  slateProgramsMseRevieweds: () => FIND_MANY_RESULT,
  slateProgramsMseReviewed: ({ where }: { where: { id: string } }) => {
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

describe("SlateProgramsMseReviewed", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateProgramsMseReviewedService,
          useValue: service,
        },
      ],
      controllers: [SlateProgramsMseReviewedController],
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

  test("POST /slateProgramsMseRevieweds", async () => {
    await request(app.getHttpServer())
      .post("/slateProgramsMseRevieweds")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateProgramsMseRevieweds", async () => {
    await request(app.getHttpServer())
      .get("/slateProgramsMseRevieweds")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateProgramsMseRevieweds/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateProgramsMseRevieweds"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateProgramsMseRevieweds/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateProgramsMseRevieweds"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateProgramsMseRevieweds existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateProgramsMseRevieweds")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateProgramsMseRevieweds")
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
