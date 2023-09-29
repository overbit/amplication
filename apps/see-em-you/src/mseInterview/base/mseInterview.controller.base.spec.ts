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
import { MseInterviewController } from "../mseInterview.controller";
import { MseInterviewService } from "../mseInterview.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  id: "exampleId",
  interviewComments: "exampleInterviewComments",
  interviewDate: new Date(),
  interviewType: "exampleInterviewType",
  interviewTypeOther: "exampleInterviewTypeOther",
  reviewerId: 42,
};
const CREATE_RESULT = {
  applicationId: 42,
  id: "exampleId",
  interviewComments: "exampleInterviewComments",
  interviewDate: new Date(),
  interviewType: "exampleInterviewType",
  interviewTypeOther: "exampleInterviewTypeOther",
  reviewerId: 42,
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    id: "exampleId",
    interviewComments: "exampleInterviewComments",
    interviewDate: new Date(),
    interviewType: "exampleInterviewType",
    interviewTypeOther: "exampleInterviewTypeOther",
    reviewerId: 42,
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  id: "exampleId",
  interviewComments: "exampleInterviewComments",
  interviewDate: new Date(),
  interviewType: "exampleInterviewType",
  interviewTypeOther: "exampleInterviewTypeOther",
  reviewerId: 42,
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

describe("MseInterview", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MseInterviewService,
          useValue: service,
        },
      ],
      controllers: [MseInterviewController],
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

  test("POST /mseInterviews", async () => {
    await request(app.getHttpServer())
      .post("/mseInterviews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        interviewDate: CREATE_RESULT.interviewDate.toISOString(),
      });
  });

  test("GET /mseInterviews", async () => {
    await request(app.getHttpServer())
      .get("/mseInterviews")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          interviewDate: FIND_MANY_RESULT[0].interviewDate.toISOString(),
        },
      ]);
  });

  test("GET /mseInterviews/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mseInterviews"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mseInterviews/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mseInterviews"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        interviewDate: FIND_ONE_RESULT.interviewDate.toISOString(),
      });
  });

  test("POST /mseInterviews existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mseInterviews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        interviewDate: CREATE_RESULT.interviewDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/mseInterviews")
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
