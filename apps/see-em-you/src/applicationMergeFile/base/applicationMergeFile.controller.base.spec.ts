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
import { ApplicationMergeFileController } from "../applicationMergeFile.controller";
import { ApplicationMergeFileService } from "../applicationMergeFile.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  guid: "exampleGuid",
  id: 42,
  mergeDate: new Date(),
  mergeFile: "exampleMergeFile",
};
const CREATE_RESULT = {
  guid: "exampleGuid",
  id: 42,
  mergeDate: new Date(),
  mergeFile: "exampleMergeFile",
};
const FIND_MANY_RESULT = [
  {
    guid: "exampleGuid",
    id: 42,
    mergeDate: new Date(),
    mergeFile: "exampleMergeFile",
  },
];
const FIND_ONE_RESULT = {
  guid: "exampleGuid",
  id: 42,
  mergeDate: new Date(),
  mergeFile: "exampleMergeFile",
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

describe("ApplicationMergeFile", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationMergeFileService,
          useValue: service,
        },
      ],
      controllers: [ApplicationMergeFileController],
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

  test("POST /applicationMergeFiles", async () => {
    await request(app.getHttpServer())
      .post("/applicationMergeFiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        mergeDate: CREATE_RESULT.mergeDate.toISOString(),
      });
  });

  test("GET /applicationMergeFiles", async () => {
    await request(app.getHttpServer())
      .get("/applicationMergeFiles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          mergeDate: FIND_MANY_RESULT[0].mergeDate.toISOString(),
        },
      ]);
  });

  test("GET /applicationMergeFiles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationMergeFiles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationMergeFiles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationMergeFiles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        mergeDate: FIND_ONE_RESULT.mergeDate.toISOString(),
      });
  });

  test("POST /applicationMergeFiles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationMergeFiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        mergeDate: CREATE_RESULT.mergeDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/applicationMergeFiles")
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
