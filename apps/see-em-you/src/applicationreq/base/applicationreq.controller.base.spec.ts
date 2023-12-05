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
import { ApplicationreqController } from "../applicationreq.controller";
import { ApplicationreqService } from "../applicationreq.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  linkname: "exampleLinkname",
  name: "exampleName",
  short: "exampleShort",
  sortorder: 42,
};
const CREATE_RESULT = {
  id: 42,
  linkname: "exampleLinkname",
  name: "exampleName",
  short: "exampleShort",
  sortorder: 42,
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    linkname: "exampleLinkname",
    name: "exampleName",
    short: "exampleShort",
    sortorder: 42,
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  linkname: "exampleLinkname",
  name: "exampleName",
  short: "exampleShort",
  sortorder: 42,
};

const service = {
  createApplicationreq() {
    return CREATE_RESULT;
  },
  applicationreqs: () => FIND_MANY_RESULT,
  applicationreq: ({ where }: { where: { id: string } }) => {
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

describe("Applicationreq", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationreqService,
          useValue: service,
        },
      ],
      controllers: [ApplicationreqController],
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

  test("POST /applicationreqs", async () => {
    await request(app.getHttpServer())
      .post("/applicationreqs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /applicationreqs", async () => {
    await request(app.getHttpServer())
      .get("/applicationreqs")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /applicationreqs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationreqs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationreqs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationreqs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /applicationreqs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationreqs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/applicationreqs")
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
