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
import { RissFundingController } from "../rissFunding.controller";
import { RissFundingService } from "../rissFunding.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  directFunding: "true",
  externalAmount: "exampleExternalAmount",
  externalFunding: "true",
  externalSource: "exampleExternalSource",
  id: 42,
  reuScholarship: "true",
};
const CREATE_RESULT = {
  directFunding: "true",
  externalAmount: "exampleExternalAmount",
  externalFunding: "true",
  externalSource: "exampleExternalSource",
  id: 42,
  reuScholarship: "true",
};
const FIND_MANY_RESULT = [
  {
    directFunding: "true",
    externalAmount: "exampleExternalAmount",
    externalFunding: "true",
    externalSource: "exampleExternalSource",
    id: 42,
    reuScholarship: "true",
  },
];
const FIND_ONE_RESULT = {
  directFunding: "true",
  externalAmount: "exampleExternalAmount",
  externalFunding: "true",
  externalSource: "exampleExternalSource",
  id: 42,
  reuScholarship: "true",
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

describe("RissFunding", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RissFundingService,
          useValue: service,
        },
      ],
      controllers: [RissFundingController],
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

  test("POST /rissFundings", async () => {
    await request(app.getHttpServer())
      .post("/rissFundings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /rissFundings", async () => {
    await request(app.getHttpServer())
      .get("/rissFundings")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /rissFundings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rissFundings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /rissFundings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rissFundings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /rissFundings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/rissFundings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/rissFundings")
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
