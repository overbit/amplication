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
import { MhciPrereqsProgrammingTestController } from "../mhciPrereqsProgrammingTest.controller";
import { MhciPrereqsProgrammingTestService } from "../mhciPrereqsProgrammingTest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  downloadTimestamp: new Date(),
  id: 42,
  periodId: 42,
  uploadDatafileinfoId: 42,
};
const CREATE_RESULT = {
  applicationId: 42,
  downloadTimestamp: new Date(),
  id: 42,
  periodId: 42,
  uploadDatafileinfoId: 42,
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    downloadTimestamp: new Date(),
    id: 42,
    periodId: 42,
    uploadDatafileinfoId: 42,
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  downloadTimestamp: new Date(),
  id: 42,
  periodId: 42,
  uploadDatafileinfoId: 42,
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

describe("MhciPrereqsProgrammingTest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MhciPrereqsProgrammingTestService,
          useValue: service,
        },
      ],
      controllers: [MhciPrereqsProgrammingTestController],
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

  test("POST /mhciPrereqsProgrammingTests", async () => {
    await request(app.getHttpServer())
      .post("/mhciPrereqsProgrammingTests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        downloadTimestamp: CREATE_RESULT.downloadTimestamp.toISOString(),
      });
  });

  test("GET /mhciPrereqsProgrammingTests", async () => {
    await request(app.getHttpServer())
      .get("/mhciPrereqsProgrammingTests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          downloadTimestamp:
            FIND_MANY_RESULT[0].downloadTimestamp.toISOString(),
        },
      ]);
  });

  test("GET /mhciPrereqsProgrammingTests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciPrereqsProgrammingTests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mhciPrereqsProgrammingTests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciPrereqsProgrammingTests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        downloadTimestamp: FIND_ONE_RESULT.downloadTimestamp.toISOString(),
      });
  });

  test("POST /mhciPrereqsProgrammingTests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mhciPrereqsProgrammingTests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        downloadTimestamp: CREATE_RESULT.downloadTimestamp.toISOString(),
      })
      .then(function () {
        agent
          .post("/mhciPrereqsProgrammingTests")
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
