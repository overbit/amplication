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
import { LuApplicationAppreqController } from "../luApplicationAppreq.controller";
import { LuApplicationAppreqService } from "../luApplicationAppreq.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  completed: "true",
  id: 42,
  lastModified: new Date(),
  reqId: 42,
};
const CREATE_RESULT = {
  completed: "true",
  id: 42,
  lastModified: new Date(),
  reqId: 42,
};
const FIND_MANY_RESULT = [
  {
    completed: "true",
    id: 42,
    lastModified: new Date(),
    reqId: 42,
  },
];
const FIND_ONE_RESULT = {
  completed: "true",
  id: 42,
  lastModified: new Date(),
  reqId: 42,
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

describe("LuApplicationAppreq", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LuApplicationAppreqService,
          useValue: service,
        },
      ],
      controllers: [LuApplicationAppreqController],
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

  test("POST /luApplicationAppreqs", async () => {
    await request(app.getHttpServer())
      .post("/luApplicationAppreqs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastModified: CREATE_RESULT.lastModified.toISOString(),
      });
  });

  test("GET /luApplicationAppreqs", async () => {
    await request(app.getHttpServer())
      .get("/luApplicationAppreqs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          lastModified: FIND_MANY_RESULT[0].lastModified.toISOString(),
        },
      ]);
  });

  test("GET /luApplicationAppreqs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luApplicationAppreqs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /luApplicationAppreqs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luApplicationAppreqs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        lastModified: FIND_ONE_RESULT.lastModified.toISOString(),
      });
  });

  test("POST /luApplicationAppreqs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/luApplicationAppreqs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastModified: CREATE_RESULT.lastModified.toISOString(),
      })
      .then(function () {
        agent
          .post("/luApplicationAppreqs")
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
