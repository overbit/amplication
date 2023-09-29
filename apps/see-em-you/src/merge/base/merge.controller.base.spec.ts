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
import { MergeController } from "../merge.controller";
import { MergeService } from "../merge.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  errorField: 42,
  id: 42,
  merged: "true",
  mergeDate: new Date(),
  message: "exampleMessage",
};
const CREATE_RESULT = {
  applicationId: 42,
  errorField: 42,
  id: 42,
  merged: "true",
  mergeDate: new Date(),
  message: "exampleMessage",
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    errorField: 42,
    id: 42,
    merged: "true",
    mergeDate: new Date(),
    message: "exampleMessage",
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  errorField: 42,
  id: 42,
  merged: "true",
  mergeDate: new Date(),
  message: "exampleMessage",
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

describe("Merge", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MergeService,
          useValue: service,
        },
      ],
      controllers: [MergeController],
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

  test("POST /merges", async () => {
    await request(app.getHttpServer())
      .post("/merges")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        mergeDate: CREATE_RESULT.mergeDate.toISOString(),
      });
  });

  test("GET /merges", async () => {
    await request(app.getHttpServer())
      .get("/merges")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          mergeDate: FIND_MANY_RESULT[0].mergeDate.toISOString(),
        },
      ]);
  });

  test("GET /merges/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/merges"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /merges/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/merges"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        mergeDate: FIND_ONE_RESULT.mergeDate.toISOString(),
      });
  });

  test("POST /merges existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/merges")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        mergeDate: CREATE_RESULT.mergeDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/merges")
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
