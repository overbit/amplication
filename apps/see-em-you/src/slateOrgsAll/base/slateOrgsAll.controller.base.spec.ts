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
import { SlateOrgsAllController } from "../slateOrgsAll.controller";
import { SlateOrgsAllService } from "../slateOrgsAll.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  awId: "exampleAwId",
  awName: "exampleAwName",
  id: "exampleId",
  localName: "exampleLocalName",
  name: "exampleName",
  sharedName: "exampleSharedName",
  slateOrgsAllId: "exampleSlateOrgsAllId",
};
const CREATE_RESULT = {
  awId: "exampleAwId",
  awName: "exampleAwName",
  id: "exampleId",
  localName: "exampleLocalName",
  name: "exampleName",
  sharedName: "exampleSharedName",
  slateOrgsAllId: "exampleSlateOrgsAllId",
};
const FIND_MANY_RESULT = [
  {
    awId: "exampleAwId",
    awName: "exampleAwName",
    id: "exampleId",
    localName: "exampleLocalName",
    name: "exampleName",
    sharedName: "exampleSharedName",
    slateOrgsAllId: "exampleSlateOrgsAllId",
  },
];
const FIND_ONE_RESULT = {
  awId: "exampleAwId",
  awName: "exampleAwName",
  id: "exampleId",
  localName: "exampleLocalName",
  name: "exampleName",
  sharedName: "exampleSharedName",
  slateOrgsAllId: "exampleSlateOrgsAllId",
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

describe("SlateOrgsAll", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateOrgsAllService,
          useValue: service,
        },
      ],
      controllers: [SlateOrgsAllController],
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

  test("POST /slateOrgsAlls", async () => {
    await request(app.getHttpServer())
      .post("/slateOrgsAlls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateOrgsAlls", async () => {
    await request(app.getHttpServer())
      .get("/slateOrgsAlls")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateOrgsAlls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateOrgsAlls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateOrgsAlls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateOrgsAlls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateOrgsAlls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateOrgsAlls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateOrgsAlls")
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
