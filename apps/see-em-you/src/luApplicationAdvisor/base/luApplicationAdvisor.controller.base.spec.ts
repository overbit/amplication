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
import { LuApplicationAdvisorController } from "../luApplicationAdvisor.controller";
import { LuApplicationAdvisorService } from "../luApplicationAdvisor.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  advisorUserId: 42,
  advisorType: 42,
  name: "exampleName",
  programId: 42,
  choice: 42,
  id: 42,
};
const CREATE_RESULT = {
  advisorUserId: 42,
  advisorType: 42,
  name: "exampleName",
  programId: 42,
  choice: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    advisorUserId: 42,
    advisorType: 42,
    name: "exampleName",
    programId: 42,
    choice: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  advisorUserId: 42,
  advisorType: 42,
  name: "exampleName",
  programId: 42,
  choice: 42,
  id: 42,
};

const service = {
  createLuApplicationAdvisor() {
    return CREATE_RESULT;
  },
  luApplicationAdvisors: () => FIND_MANY_RESULT,
  luApplicationAdvisor: ({ where }: { where: { id: string } }) => {
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

describe("LuApplicationAdvisor", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LuApplicationAdvisorService,
          useValue: service,
        },
      ],
      controllers: [LuApplicationAdvisorController],
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

  test("POST /luApplicationAdvisors", async () => {
    await request(app.getHttpServer())
      .post("/luApplicationAdvisors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /luApplicationAdvisors", async () => {
    await request(app.getHttpServer())
      .get("/luApplicationAdvisors")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /luApplicationAdvisors/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luApplicationAdvisors"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /luApplicationAdvisors/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luApplicationAdvisors"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /luApplicationAdvisors existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/luApplicationAdvisors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/luApplicationAdvisors")
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
