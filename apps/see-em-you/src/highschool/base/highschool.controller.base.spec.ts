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
import { HighschoolController } from "../highschool.controller";
import { HighschoolService } from "../highschool.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  appId: 42,
  created: new Date(),
  graduated: 42,
  hsCeeb: 42,
  hsDuration: 42.424242424,
  hsGradYear: 42,
  hsName: "exampleHsName",
  hsNces: 42242424,
  hsState: "exampleHsState",
  hsZip: "exampleHsZip",
  id: 42,
  modified: new Date(),
};
const CREATE_RESULT = {
  appId: 42,
  created: new Date(),
  graduated: 42,
  hsCeeb: 42,
  hsDuration: 42.424242424,
  hsGradYear: 42,
  hsName: "exampleHsName",
  hsNces: 42242424,
  hsState: "exampleHsState",
  hsZip: "exampleHsZip",
  id: 42,
  modified: new Date(),
};
const FIND_MANY_RESULT = [
  {
    appId: 42,
    created: new Date(),
    graduated: 42,
    hsCeeb: 42,
    hsDuration: 42.424242424,
    hsGradYear: 42,
    hsName: "exampleHsName",
    hsNces: 42242424,
    hsState: "exampleHsState",
    hsZip: "exampleHsZip",
    id: 42,
    modified: new Date(),
  },
];
const FIND_ONE_RESULT = {
  appId: 42,
  created: new Date(),
  graduated: 42,
  hsCeeb: 42,
  hsDuration: 42.424242424,
  hsGradYear: 42,
  hsName: "exampleHsName",
  hsNces: 42242424,
  hsState: "exampleHsState",
  hsZip: "exampleHsZip",
  id: 42,
  modified: new Date(),
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

describe("Highschool", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HighschoolService,
          useValue: service,
        },
      ],
      controllers: [HighschoolController],
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

  test("POST /highschools", async () => {
    await request(app.getHttpServer())
      .post("/highschools")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
      });
  });

  test("GET /highschools", async () => {
    await request(app.getHttpServer())
      .get("/highschools")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
        },
      ]);
  });

  test("GET /highschools/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/highschools"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /highschools/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/highschools"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
      });
  });

  test("POST /highschools existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/highschools")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
      })
      .then(function () {
        agent
          .post("/highschools")
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
