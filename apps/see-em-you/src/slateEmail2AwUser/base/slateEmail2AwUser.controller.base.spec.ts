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
import { SlateEmail2AwUserController } from "../slateEmail2AwUser.controller";
import { SlateEmail2AwUserService } from "../slateEmail2AwUser.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  slateEmail: "exampleSlateEmail",
  awLuuUserId: 42,
  id: 42,
};
const CREATE_RESULT = {
  slateEmail: "exampleSlateEmail",
  awLuuUserId: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    slateEmail: "exampleSlateEmail",
    awLuuUserId: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  slateEmail: "exampleSlateEmail",
  awLuuUserId: 42,
  id: 42,
};

const service = {
  createSlateEmail2AwUser() {
    return CREATE_RESULT;
  },
  slateEmail2AwUsers: () => FIND_MANY_RESULT,
  slateEmail2AwUser: ({ where }: { where: { id: string } }) => {
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

describe("SlateEmail2AwUser", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateEmail2AwUserService,
          useValue: service,
        },
      ],
      controllers: [SlateEmail2AwUserController],
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

  test("POST /slateEmail2AwUsers", async () => {
    await request(app.getHttpServer())
      .post("/slateEmail2AwUsers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateEmail2AwUsers", async () => {
    await request(app.getHttpServer())
      .get("/slateEmail2AwUsers")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateEmail2AwUsers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateEmail2AwUsers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateEmail2AwUsers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateEmail2AwUsers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateEmail2AwUsers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateEmail2AwUsers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateEmail2AwUsers")
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
