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
import { DatafileinfoController } from "../datafileinfo.controller";
import { DatafileinfoService } from "../datafileinfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  extension: "exampleExtension",
  id: 42,
  moddate: new Date(),
  section: 42,
  size: 42,
  typeField: "exampleTypeField",
  userdata: "exampleUserdata",
  userId: 42,
};
const CREATE_RESULT = {
  extension: "exampleExtension",
  id: 42,
  moddate: new Date(),
  section: 42,
  size: 42,
  typeField: "exampleTypeField",
  userdata: "exampleUserdata",
  userId: 42,
};
const FIND_MANY_RESULT = [
  {
    extension: "exampleExtension",
    id: 42,
    moddate: new Date(),
    section: 42,
    size: 42,
    typeField: "exampleTypeField",
    userdata: "exampleUserdata",
    userId: 42,
  },
];
const FIND_ONE_RESULT = {
  extension: "exampleExtension",
  id: 42,
  moddate: new Date(),
  section: 42,
  size: 42,
  typeField: "exampleTypeField",
  userdata: "exampleUserdata",
  userId: 42,
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

describe("Datafileinfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DatafileinfoService,
          useValue: service,
        },
      ],
      controllers: [DatafileinfoController],
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

  test("POST /datafileinfos", async () => {
    await request(app.getHttpServer())
      .post("/datafileinfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        moddate: CREATE_RESULT.moddate.toISOString(),
      });
  });

  test("GET /datafileinfos", async () => {
    await request(app.getHttpServer())
      .get("/datafileinfos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          moddate: FIND_MANY_RESULT[0].moddate.toISOString(),
        },
      ]);
  });

  test("GET /datafileinfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/datafileinfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /datafileinfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/datafileinfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        moddate: FIND_ONE_RESULT.moddate.toISOString(),
      });
  });

  test("POST /datafileinfos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/datafileinfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        moddate: CREATE_RESULT.moddate.toISOString(),
      })
      .then(function () {
        agent
          .post("/datafileinfos")
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
