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
import { LuUsersUsertypesHistoryController } from "../luUsersUsertypesHistory.controller";
import { LuUsersUsertypesHistoryService } from "../luUsersUsertypesHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  deleteTimestamp: new Date(),
  deleteUsersId: 42,
  id: 42,
  userId: 42,
  usertypeId: 42,
};
const CREATE_RESULT = {
  deleteTimestamp: new Date(),
  deleteUsersId: 42,
  id: 42,
  userId: 42,
  usertypeId: 42,
};
const FIND_MANY_RESULT = [
  {
    deleteTimestamp: new Date(),
    deleteUsersId: 42,
    id: 42,
    userId: 42,
    usertypeId: 42,
  },
];
const FIND_ONE_RESULT = {
  deleteTimestamp: new Date(),
  deleteUsersId: 42,
  id: 42,
  userId: 42,
  usertypeId: 42,
};

const service = {
  createLuUsersUsertypesHistory() {
    return CREATE_RESULT;
  },
  luUsersUsertypesHistories: () => FIND_MANY_RESULT,
  luUsersUsertypesHistory: ({ where }: { where: { id: string } }) => {
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

describe("LuUsersUsertypesHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LuUsersUsertypesHistoryService,
          useValue: service,
        },
      ],
      controllers: [LuUsersUsertypesHistoryController],
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

  test("POST /luUsersUsertypesHistories", async () => {
    await request(app.getHttpServer())
      .post("/luUsersUsertypesHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        deleteTimestamp: CREATE_RESULT.deleteTimestamp.toISOString(),
      });
  });

  test("GET /luUsersUsertypesHistories", async () => {
    await request(app.getHttpServer())
      .get("/luUsersUsertypesHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          deleteTimestamp: FIND_MANY_RESULT[0].deleteTimestamp.toISOString(),
        },
      ]);
  });

  test("GET /luUsersUsertypesHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luUsersUsertypesHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /luUsersUsertypesHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luUsersUsertypesHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        deleteTimestamp: FIND_ONE_RESULT.deleteTimestamp.toISOString(),
      });
  });

  test("POST /luUsersUsertypesHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/luUsersUsertypesHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        deleteTimestamp: CREATE_RESULT.deleteTimestamp.toISOString(),
      })
      .then(function () {
        agent
          .post("/luUsersUsertypesHistories")
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
