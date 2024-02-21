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
import { RequestsAccessController } from "../requestsAccess.controller";
import { RequestsAccessService } from "../requestsAccess.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  user: "exampleUser",
  createdDate: new Date(),
  id: 42,
};
const CREATE_RESULT = {
  user: "exampleUser",
  createdDate: new Date(),
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    user: "exampleUser",
    createdDate: new Date(),
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  user: "exampleUser",
  createdDate: new Date(),
  id: 42,
};

const service = {
  createRequestsAccess() {
    return CREATE_RESULT;
  },
  requestsAccesses: () => FIND_MANY_RESULT,
  requestsAccess: ({ where }: { where: { id: string } }) => {
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

describe("RequestsAccess", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RequestsAccessService,
          useValue: service,
        },
      ],
      controllers: [RequestsAccessController],
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

  test("POST /requestsAccesses", async () => {
    await request(app.getHttpServer())
      .post("/requestsAccesses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
      });
  });

  test("GET /requestsAccesses", async () => {
    await request(app.getHttpServer())
      .get("/requestsAccesses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdDate: FIND_MANY_RESULT[0].createdDate.toISOString(),
        },
      ]);
  });

  test("GET /requestsAccesses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/requestsAccesses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /requestsAccesses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/requestsAccesses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdDate: FIND_ONE_RESULT.createdDate.toISOString(),
      });
  });

  test("POST /requestsAccesses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/requestsAccesses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/requestsAccesses")
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
