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
import { LuApplicationProgramController } from "../luApplicationProgram.controller";
import { LuApplicationProgramService } from "../luApplicationProgram.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  admissionStatus: "exampleAdmissionStatus",
  admit: "exampleAdmit",
  admitComments: "exampleAdmitComments",
  choice: 42,
  decision: "exampleDecision",
  faccontact: "exampleFaccontact",
  id: 42,
  ltichoice: "exampleLtichoice",
  msecertchoice: "exampleMsecertchoice",
  round2: "exampleRound2",
  scholarshipAmt: 42.424242424,
  scholarshipComments: "exampleScholarshipComments",
  stucontact: "exampleStucontact",
};
const CREATE_RESULT = {
  admissionStatus: "exampleAdmissionStatus",
  admit: "exampleAdmit",
  admitComments: "exampleAdmitComments",
  choice: 42,
  decision: "exampleDecision",
  faccontact: "exampleFaccontact",
  id: 42,
  ltichoice: "exampleLtichoice",
  msecertchoice: "exampleMsecertchoice",
  round2: "exampleRound2",
  scholarshipAmt: 42.424242424,
  scholarshipComments: "exampleScholarshipComments",
  stucontact: "exampleStucontact",
};
const FIND_MANY_RESULT = [
  {
    admissionStatus: "exampleAdmissionStatus",
    admit: "exampleAdmit",
    admitComments: "exampleAdmitComments",
    choice: 42,
    decision: "exampleDecision",
    faccontact: "exampleFaccontact",
    id: 42,
    ltichoice: "exampleLtichoice",
    msecertchoice: "exampleMsecertchoice",
    round2: "exampleRound2",
    scholarshipAmt: 42.424242424,
    scholarshipComments: "exampleScholarshipComments",
    stucontact: "exampleStucontact",
  },
];
const FIND_ONE_RESULT = {
  admissionStatus: "exampleAdmissionStatus",
  admit: "exampleAdmit",
  admitComments: "exampleAdmitComments",
  choice: 42,
  decision: "exampleDecision",
  faccontact: "exampleFaccontact",
  id: 42,
  ltichoice: "exampleLtichoice",
  msecertchoice: "exampleMsecertchoice",
  round2: "exampleRound2",
  scholarshipAmt: 42.424242424,
  scholarshipComments: "exampleScholarshipComments",
  stucontact: "exampleStucontact",
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

describe("LuApplicationProgram", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LuApplicationProgramService,
          useValue: service,
        },
      ],
      controllers: [LuApplicationProgramController],
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

  test("POST /luApplicationPrograms", async () => {
    await request(app.getHttpServer())
      .post("/luApplicationPrograms")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /luApplicationPrograms", async () => {
    await request(app.getHttpServer())
      .get("/luApplicationPrograms")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /luApplicationPrograms/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luApplicationPrograms"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /luApplicationPrograms/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luApplicationPrograms"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /luApplicationPrograms existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/luApplicationPrograms")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/luApplicationPrograms")
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
