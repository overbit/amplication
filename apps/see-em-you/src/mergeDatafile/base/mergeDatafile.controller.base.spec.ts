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
import { MergeDatafileController } from "../mergeDatafile.controller";
import { MergeDatafileService } from "../mergeDatafile.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  converted: "true",
  convertError: 42,
  convertMessage: "exampleConvertMessage",
  datafileinfoId: 42,
  id: "exampleId",
  merged: "true",
  mergeError: 42,
  mergeFilename: "exampleMergeFilename",
  mergeId: 42,
  mergeMessage: "exampleMergeMessage",
};
const CREATE_RESULT = {
  converted: "true",
  convertError: 42,
  convertMessage: "exampleConvertMessage",
  datafileinfoId: 42,
  id: "exampleId",
  merged: "true",
  mergeError: 42,
  mergeFilename: "exampleMergeFilename",
  mergeId: 42,
  mergeMessage: "exampleMergeMessage",
};
const FIND_MANY_RESULT = [
  {
    converted: "true",
    convertError: 42,
    convertMessage: "exampleConvertMessage",
    datafileinfoId: 42,
    id: "exampleId",
    merged: "true",
    mergeError: 42,
    mergeFilename: "exampleMergeFilename",
    mergeId: 42,
    mergeMessage: "exampleMergeMessage",
  },
];
const FIND_ONE_RESULT = {
  converted: "true",
  convertError: 42,
  convertMessage: "exampleConvertMessage",
  datafileinfoId: 42,
  id: "exampleId",
  merged: "true",
  mergeError: 42,
  mergeFilename: "exampleMergeFilename",
  mergeId: 42,
  mergeMessage: "exampleMergeMessage",
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

describe("MergeDatafile", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MergeDatafileService,
          useValue: service,
        },
      ],
      controllers: [MergeDatafileController],
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

  test("POST /mergeDatafiles", async () => {
    await request(app.getHttpServer())
      .post("/mergeDatafiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mergeDatafiles", async () => {
    await request(app.getHttpServer())
      .get("/mergeDatafiles")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mergeDatafiles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mergeDatafiles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mergeDatafiles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mergeDatafiles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mergeDatafiles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mergeDatafiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mergeDatafiles")
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
