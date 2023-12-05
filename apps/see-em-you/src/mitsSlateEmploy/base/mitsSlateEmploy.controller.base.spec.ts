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
import { MitsSlateEmployController } from "../mitsSlateEmploy.controller";
import { MitsSlateEmployService } from "../mitsSlateEmploy.service";

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
  createMitsSlateEmploy() {
    return CREATE_RESULT;
  },
  mitsSlateEmploys: () => FIND_MANY_RESULT,
  mitsSlateEmploy: ({ where }: { where: { id: string } }) => {
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

describe("MitsSlateEmploy", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MitsSlateEmployService,
          useValue: service,
        },
      ],
      controllers: [MitsSlateEmployController],
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

  test("POST /mitsSlateEmploys", async () => {
    await request(app.getHttpServer())
      .post("/mitsSlateEmploys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mitsSlateEmploys", async () => {
    await request(app.getHttpServer())
      .get("/mitsSlateEmploys")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mitsSlateEmploys/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mitsSlateEmploys"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mitsSlateEmploys/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mitsSlateEmploys"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mitsSlateEmploys existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mitsSlateEmploys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mitsSlateEmploys")
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
