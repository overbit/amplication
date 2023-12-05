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
import { ApplicationContentController } from "../applicationContent.controller";
import { ApplicationContentService } from "../applicationContent.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  desired: "true",
  id: 42242424,
  programId: 42,
  required: "true",
  sectionIdentifier: "exampleSectionIdentifier",
};
const CREATE_RESULT = {
  desired: "true",
  id: 42242424,
  programId: 42,
  required: "true",
  sectionIdentifier: "exampleSectionIdentifier",
};
const FIND_MANY_RESULT = [
  {
    desired: "true",
    id: 42242424,
    programId: 42,
    required: "true",
    sectionIdentifier: "exampleSectionIdentifier",
  },
];
const FIND_ONE_RESULT = {
  desired: "true",
  id: 42242424,
  programId: 42,
  required: "true",
  sectionIdentifier: "exampleSectionIdentifier",
};

const service = {
  createApplicationContent() {
    return CREATE_RESULT;
  },
  applicationContents: () => FIND_MANY_RESULT,
  applicationContent: ({ where }: { where: { id: string } }) => {
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

describe("ApplicationContent", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationContentService,
          useValue: service,
        },
      ],
      controllers: [ApplicationContentController],
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

  test("POST /applicationContents", async () => {
    await request(app.getHttpServer())
      .post("/applicationContents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /applicationContents", async () => {
    await request(app.getHttpServer())
      .get("/applicationContents")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /applicationContents/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationContents"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationContents/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationContents"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /applicationContents existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationContents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/applicationContents")
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
