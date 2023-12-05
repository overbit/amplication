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
import { VisatypeController } from "../visatype.controller";
import { VisatypeService } from "../visatype.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addedFor: "exampleAddedFor",
  description: "exampleDescription",
  id: 42,
  name: "exampleName",
  short: "exampleShort",
};
const CREATE_RESULT = {
  addedFor: "exampleAddedFor",
  description: "exampleDescription",
  id: 42,
  name: "exampleName",
  short: "exampleShort",
};
const FIND_MANY_RESULT = [
  {
    addedFor: "exampleAddedFor",
    description: "exampleDescription",
    id: 42,
    name: "exampleName",
    short: "exampleShort",
  },
];
const FIND_ONE_RESULT = {
  addedFor: "exampleAddedFor",
  description: "exampleDescription",
  id: 42,
  name: "exampleName",
  short: "exampleShort",
};

const service = {
  createVisatype() {
    return CREATE_RESULT;
  },
  visatypes: () => FIND_MANY_RESULT,
  visatype: ({ where }: { where: { id: string } }) => {
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

describe("Visatype", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: VisatypeService,
          useValue: service,
        },
      ],
      controllers: [VisatypeController],
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

  test("POST /visatypes", async () => {
    await request(app.getHttpServer())
      .post("/visatypes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /visatypes", async () => {
    await request(app.getHttpServer())
      .get("/visatypes")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /visatypes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/visatypes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /visatypes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/visatypes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /visatypes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/visatypes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/visatypes")
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
