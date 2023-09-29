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
import { SlateEmployController } from "../slateEmploy.controller";
import { SlateEmployService } from "../slateEmploy.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  first: "exampleFirst",
  id: "exampleId",
  job1From: "exampleJob1From",
  job1Organization: "exampleJob1Organization",
  job1To: "exampleJob1To",
  job2From: "exampleJob2From",
  job2Organization: "exampleJob2Organization",
  job2To: "exampleJob2To",
  job3From: "exampleJob3From",
  job3Organization: "exampleJob3Organization",
  job3To: "exampleJob3To",
  jobNum1YearsOfExperience: "exampleJobNum1YearsOfExperience",
  jobNum2YearsOfExperience: "exampleJobNum2YearsOfExperience",
  jobNum3YearsOfExperience: "exampleJobNum3YearsOfExperience",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
};
const CREATE_RESULT = {
  first: "exampleFirst",
  id: "exampleId",
  job1From: "exampleJob1From",
  job1Organization: "exampleJob1Organization",
  job1To: "exampleJob1To",
  job2From: "exampleJob2From",
  job2Organization: "exampleJob2Organization",
  job2To: "exampleJob2To",
  job3From: "exampleJob3From",
  job3Organization: "exampleJob3Organization",
  job3To: "exampleJob3To",
  jobNum1YearsOfExperience: "exampleJobNum1YearsOfExperience",
  jobNum2YearsOfExperience: "exampleJobNum2YearsOfExperience",
  jobNum3YearsOfExperience: "exampleJobNum3YearsOfExperience",
  last: "exampleLast",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
};
const FIND_MANY_RESULT = [
  {
    first: "exampleFirst",
    id: "exampleId",
    job1From: "exampleJob1From",
    job1Organization: "exampleJob1Organization",
    job1To: "exampleJob1To",
    job2From: "exampleJob2From",
    job2Organization: "exampleJob2Organization",
    job2To: "exampleJob2To",
    job3From: "exampleJob3From",
    job3Organization: "exampleJob3Organization",
    job3To: "exampleJob3To",
    jobNum1YearsOfExperience: "exampleJobNum1YearsOfExperience",
    jobNum2YearsOfExperience: "exampleJobNum2YearsOfExperience",
    jobNum3YearsOfExperience: "exampleJobNum3YearsOfExperience",
    last: "exampleLast",
    middle: "exampleMiddle",
    prefix: "examplePrefix",
  },
];
const FIND_ONE_RESULT = {
  first: "exampleFirst",
  id: "exampleId",
  job1From: "exampleJob1From",
  job1Organization: "exampleJob1Organization",
  job1To: "exampleJob1To",
  job2From: "exampleJob2From",
  job2Organization: "exampleJob2Organization",
  job2To: "exampleJob2To",
  job3From: "exampleJob3From",
  job3Organization: "exampleJob3Organization",
  job3To: "exampleJob3To",
  jobNum1YearsOfExperience: "exampleJobNum1YearsOfExperience",
  jobNum2YearsOfExperience: "exampleJobNum2YearsOfExperience",
  jobNum3YearsOfExperience: "exampleJobNum3YearsOfExperience",
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

describe("SlateEmploy", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateEmployService,
          useValue: service,
        },
      ],
      controllers: [SlateEmployController],
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

  test("POST /slateEmploys", async () => {
    await request(app.getHttpServer())
      .post("/slateEmploys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateEmploys", async () => {
    await request(app.getHttpServer())
      .get("/slateEmploys")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateEmploys/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateEmploys"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateEmploys/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateEmploys"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateEmploys existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateEmploys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateEmploys")
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
