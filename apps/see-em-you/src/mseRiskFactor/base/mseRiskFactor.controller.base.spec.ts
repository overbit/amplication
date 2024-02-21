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
import { MseRiskFactorController } from "../mseRiskFactor.controller";
import { MseRiskFactorService } from "../mseRiskFactor.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  reviewerId: 42,
  language: 42,
  experience: 42,
  academic: 42,
  other: 42,
  otherText: "exampleOtherText",
  id: "exampleId",
};
const CREATE_RESULT = {
  applicationId: 42,
  reviewerId: 42,
  language: 42,
  experience: 42,
  academic: 42,
  other: 42,
  otherText: "exampleOtherText",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    reviewerId: 42,
    language: 42,
    experience: 42,
    academic: 42,
    other: 42,
    otherText: "exampleOtherText",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  reviewerId: 42,
  language: 42,
  experience: 42,
  academic: 42,
  other: 42,
  otherText: "exampleOtherText",
  id: "exampleId",
};

const service = {
  createMseRiskFactor() {
    return CREATE_RESULT;
  },
  mseRiskFactors: () => FIND_MANY_RESULT,
  mseRiskFactor: ({ where }: { where: { id: string } }) => {
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

describe("MseRiskFactor", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MseRiskFactorService,
          useValue: service,
        },
      ],
      controllers: [MseRiskFactorController],
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

  test("POST /mseRiskFactors", async () => {
    await request(app.getHttpServer())
      .post("/mseRiskFactors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mseRiskFactors", async () => {
    await request(app.getHttpServer())
      .get("/mseRiskFactors")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mseRiskFactors/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mseRiskFactors"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mseRiskFactors/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mseRiskFactors"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mseRiskFactors existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mseRiskFactors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mseRiskFactors")
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
