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
import { VoucherApplicationErrorController } from "../voucherApplicationError.controller";
import { VoucherApplicationErrorService } from "../voucherApplicationError.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allowMultiple: 42,
  appId: 42,
  code: "exampleCode",
  errMsg: "exampleErrMsg",
  id: 42,
  vaId: 42,
};
const CREATE_RESULT = {
  allowMultiple: 42,
  appId: 42,
  code: "exampleCode",
  errMsg: "exampleErrMsg",
  id: 42,
  vaId: 42,
};
const FIND_MANY_RESULT = [
  {
    allowMultiple: 42,
    appId: 42,
    code: "exampleCode",
    errMsg: "exampleErrMsg",
    id: 42,
    vaId: 42,
  },
];
const FIND_ONE_RESULT = {
  allowMultiple: 42,
  appId: 42,
  code: "exampleCode",
  errMsg: "exampleErrMsg",
  id: 42,
  vaId: 42,
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

describe("VoucherApplicationError", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: VoucherApplicationErrorService,
          useValue: service,
        },
      ],
      controllers: [VoucherApplicationErrorController],
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

  test("POST /voucherApplicationErrors", async () => {
    await request(app.getHttpServer())
      .post("/voucherApplicationErrors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /voucherApplicationErrors", async () => {
    await request(app.getHttpServer())
      .get("/voucherApplicationErrors")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /voucherApplicationErrors/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/voucherApplicationErrors"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /voucherApplicationErrors/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/voucherApplicationErrors"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /voucherApplicationErrors existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/voucherApplicationErrors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/voucherApplicationErrors")
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
