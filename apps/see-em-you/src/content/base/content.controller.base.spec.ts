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
import { ContentController } from "../content.controller";
import { ContentService } from "../content.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  content: "exampleContent",
  contenttypeId: 42,
  departmentId: 42,
  domainId: 42,
  id: 42,
  modifiedby: 42,
  modifieddate: new Date(),
  name: "exampleName",
};
const CREATE_RESULT = {
  content: "exampleContent",
  contenttypeId: 42,
  departmentId: 42,
  domainId: 42,
  id: 42,
  modifiedby: 42,
  modifieddate: new Date(),
  name: "exampleName",
};
const FIND_MANY_RESULT = [
  {
    content: "exampleContent",
    contenttypeId: 42,
    departmentId: 42,
    domainId: 42,
    id: 42,
    modifiedby: 42,
    modifieddate: new Date(),
    name: "exampleName",
  },
];
const FIND_ONE_RESULT = {
  content: "exampleContent",
  contenttypeId: 42,
  departmentId: 42,
  domainId: 42,
  id: 42,
  modifiedby: 42,
  modifieddate: new Date(),
  name: "exampleName",
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

describe("Content", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContentService,
          useValue: service,
        },
      ],
      controllers: [ContentController],
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

  test("POST /contents", async () => {
    await request(app.getHttpServer())
      .post("/contents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        modifieddate: CREATE_RESULT.modifieddate.toISOString(),
      });
  });

  test("GET /contents", async () => {
    await request(app.getHttpServer())
      .get("/contents")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          modifieddate: FIND_MANY_RESULT[0].modifieddate.toISOString(),
        },
      ]);
  });

  test("GET /contents/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contents"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contents/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contents"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        modifieddate: FIND_ONE_RESULT.modifieddate.toISOString(),
      });
  });

  test("POST /contents existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/contents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        modifieddate: CREATE_RESULT.modifieddate.toISOString(),
      })
      .then(function () {
        agent
          .post("/contents")
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
