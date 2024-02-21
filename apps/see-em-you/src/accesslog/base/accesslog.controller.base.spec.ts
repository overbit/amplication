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
import { AccesslogController } from "../accesslog.controller";
import { AccesslogService } from "../accesslog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  usersId: 42,
  luUsersUsertypesId: 42,
  usertypeId: 42,
  applicationId: 42,
  client: "exampleClient",
  eventtime: new Date(),
  activity: "exampleActivity",
  domain: 42,
  referer: "exampleReferer",
  xforward: "exampleXforward",
  sa: "exampleSa",
  ra: "exampleRa",
  lastsrv: "exampleLastsrv",
};
const CREATE_RESULT = {
  id: 42,
  usersId: 42,
  luUsersUsertypesId: 42,
  usertypeId: 42,
  applicationId: 42,
  client: "exampleClient",
  eventtime: new Date(),
  activity: "exampleActivity",
  domain: 42,
  referer: "exampleReferer",
  xforward: "exampleXforward",
  sa: "exampleSa",
  ra: "exampleRa",
  lastsrv: "exampleLastsrv",
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    usersId: 42,
    luUsersUsertypesId: 42,
    usertypeId: 42,
    applicationId: 42,
    client: "exampleClient",
    eventtime: new Date(),
    activity: "exampleActivity",
    domain: 42,
    referer: "exampleReferer",
    xforward: "exampleXforward",
    sa: "exampleSa",
    ra: "exampleRa",
    lastsrv: "exampleLastsrv",
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  usersId: 42,
  luUsersUsertypesId: 42,
  usertypeId: 42,
  applicationId: 42,
  client: "exampleClient",
  eventtime: new Date(),
  activity: "exampleActivity",
  domain: 42,
  referer: "exampleReferer",
  xforward: "exampleXforward",
  sa: "exampleSa",
  ra: "exampleRa",
  lastsrv: "exampleLastsrv",
};

const service = {
  createAccesslog() {
    return CREATE_RESULT;
  },
  accesslogs: () => FIND_MANY_RESULT,
  accesslog: ({ where }: { where: { id: string } }) => {
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

describe("Accesslog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AccesslogService,
          useValue: service,
        },
      ],
      controllers: [AccesslogController],
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

  test("POST /accesslogs", async () => {
    await request(app.getHttpServer())
      .post("/accesslogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        eventtime: CREATE_RESULT.eventtime.toISOString(),
      });
  });

  test("GET /accesslogs", async () => {
    await request(app.getHttpServer())
      .get("/accesslogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          eventtime: FIND_MANY_RESULT[0].eventtime.toISOString(),
        },
      ]);
  });

  test("GET /accesslogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accesslogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /accesslogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accesslogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        eventtime: FIND_ONE_RESULT.eventtime.toISOString(),
      });
  });

  test("POST /accesslogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/accesslogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        eventtime: CREATE_RESULT.eventtime.toISOString(),
      })
      .then(function () {
        agent
          .post("/accesslogs")
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
