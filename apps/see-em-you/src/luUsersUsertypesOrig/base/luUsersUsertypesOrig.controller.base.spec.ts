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
import { LuUsersUsertypesOrigController } from "../luUsersUsertypesOrig.controller";
import { LuUsersUsertypesOrigService } from "../luUsersUsertypesOrig.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  userId: 42,
  usertypeId: 42,
  domain: 42,
  id: 42,
};
const CREATE_RESULT = {
  userId: 42,
  usertypeId: 42,
  domain: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    userId: 42,
    usertypeId: 42,
    domain: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  userId: 42,
  usertypeId: 42,
  domain: 42,
  id: 42,
};

const service = {
  createLuUsersUsertypesOrig() {
    return CREATE_RESULT;
  },
  luUsersUsertypesOrigs: () => FIND_MANY_RESULT,
  luUsersUsertypesOrig: ({ where }: { where: { id: string } }) => {
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

describe("LuUsersUsertypesOrig", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LuUsersUsertypesOrigService,
          useValue: service,
        },
      ],
      controllers: [LuUsersUsertypesOrigController],
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

  test("POST /luUsersUsertypesOrigs", async () => {
    await request(app.getHttpServer())
      .post("/luUsersUsertypesOrigs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /luUsersUsertypesOrigs", async () => {
    await request(app.getHttpServer())
      .get("/luUsersUsertypesOrigs")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /luUsersUsertypesOrigs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luUsersUsertypesOrigs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /luUsersUsertypesOrigs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luUsersUsertypesOrigs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /luUsersUsertypesOrigs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/luUsersUsertypesOrigs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/luUsersUsertypesOrigs")
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
