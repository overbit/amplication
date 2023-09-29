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
import { MergeApplicationController } from "../mergeApplication.controller";
import { MergeApplicationService } from "../mergeApplication.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  baseConvertError: 42,
  baseConvertMessage: "exampleBaseConvertMessage",
  baseWriteError: 42,
  baseWriteMessage: "exampleBaseWriteMessage",
  id: 42,
  searchTextWriteError: 42,
  searchTextWriteMessage: "exampleSearchTextWriteMessage",
};
const CREATE_RESULT = {
  baseConvertError: 42,
  baseConvertMessage: "exampleBaseConvertMessage",
  baseWriteError: 42,
  baseWriteMessage: "exampleBaseWriteMessage",
  id: 42,
  searchTextWriteError: 42,
  searchTextWriteMessage: "exampleSearchTextWriteMessage",
};
const FIND_MANY_RESULT = [
  {
    baseConvertError: 42,
    baseConvertMessage: "exampleBaseConvertMessage",
    baseWriteError: 42,
    baseWriteMessage: "exampleBaseWriteMessage",
    id: 42,
    searchTextWriteError: 42,
    searchTextWriteMessage: "exampleSearchTextWriteMessage",
  },
];
const FIND_ONE_RESULT = {
  baseConvertError: 42,
  baseConvertMessage: "exampleBaseConvertMessage",
  baseWriteError: 42,
  baseWriteMessage: "exampleBaseWriteMessage",
  id: 42,
  searchTextWriteError: 42,
  searchTextWriteMessage: "exampleSearchTextWriteMessage",
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

describe("MergeApplication", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MergeApplicationService,
          useValue: service,
        },
      ],
      controllers: [MergeApplicationController],
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

  test("POST /mergeApplications", async () => {
    await request(app.getHttpServer())
      .post("/mergeApplications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mergeApplications", async () => {
    await request(app.getHttpServer())
      .get("/mergeApplications")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mergeApplications/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mergeApplications"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mergeApplications/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mergeApplications"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mergeApplications existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mergeApplications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mergeApplications")
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
