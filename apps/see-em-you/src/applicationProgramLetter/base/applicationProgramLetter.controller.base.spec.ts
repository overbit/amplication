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
import { ApplicationProgramLetterController } from "../applicationProgramLetter.controller";
import { ApplicationProgramLetterService } from "../applicationProgramLetter.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  rejectionSent: "true",
  rejectionSentDate: new Date(),
  admitSent: "true",
  admitSentDate: new Date(),
  waitlistSent: "true",
  waitlistSentDate: new Date(),
  id: 42,
};
const CREATE_RESULT = {
  rejectionSent: "true",
  rejectionSentDate: new Date(),
  admitSent: "true",
  admitSentDate: new Date(),
  waitlistSent: "true",
  waitlistSentDate: new Date(),
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    rejectionSent: "true",
    rejectionSentDate: new Date(),
    admitSent: "true",
    admitSentDate: new Date(),
    waitlistSent: "true",
    waitlistSentDate: new Date(),
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  rejectionSent: "true",
  rejectionSentDate: new Date(),
  admitSent: "true",
  admitSentDate: new Date(),
  waitlistSent: "true",
  waitlistSentDate: new Date(),
  id: 42,
};

const service = {
  createApplicationProgramLetter() {
    return CREATE_RESULT;
  },
  applicationProgramLetters: () => FIND_MANY_RESULT,
  applicationProgramLetter: ({ where }: { where: { id: string } }) => {
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

describe("ApplicationProgramLetter", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationProgramLetterService,
          useValue: service,
        },
      ],
      controllers: [ApplicationProgramLetterController],
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

  test("POST /applicationProgramLetters", async () => {
    await request(app.getHttpServer())
      .post("/applicationProgramLetters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        rejectionSentDate: CREATE_RESULT.rejectionSentDate.toISOString(),
        admitSentDate: CREATE_RESULT.admitSentDate.toISOString(),
        waitlistSentDate: CREATE_RESULT.waitlistSentDate.toISOString(),
      });
  });

  test("GET /applicationProgramLetters", async () => {
    await request(app.getHttpServer())
      .get("/applicationProgramLetters")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          rejectionSentDate:
            FIND_MANY_RESULT[0].rejectionSentDate.toISOString(),
          admitSentDate: FIND_MANY_RESULT[0].admitSentDate.toISOString(),
          waitlistSentDate: FIND_MANY_RESULT[0].waitlistSentDate.toISOString(),
        },
      ]);
  });

  test("GET /applicationProgramLetters/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationProgramLetters"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationProgramLetters/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationProgramLetters"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        rejectionSentDate: FIND_ONE_RESULT.rejectionSentDate.toISOString(),
        admitSentDate: FIND_ONE_RESULT.admitSentDate.toISOString(),
        waitlistSentDate: FIND_ONE_RESULT.waitlistSentDate.toISOString(),
      });
  });

  test("POST /applicationProgramLetters existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationProgramLetters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        rejectionSentDate: CREATE_RESULT.rejectionSentDate.toISOString(),
        admitSentDate: CREATE_RESULT.admitSentDate.toISOString(),
        waitlistSentDate: CREATE_RESULT.waitlistSentDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/applicationProgramLetters")
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
