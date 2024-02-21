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
import { BlacklistReviewerController } from "../blacklistReviewer.controller";
import { BlacklistReviewerService } from "../blacklistReviewer.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  appId: 42,
  reviewerId: 42,
  deny: 42,
  id: 42,
};
const CREATE_RESULT = {
  appId: 42,
  reviewerId: 42,
  deny: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    appId: 42,
    reviewerId: 42,
    deny: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  appId: 42,
  reviewerId: 42,
  deny: 42,
  id: 42,
};

const service = {
  createBlacklistReviewer() {
    return CREATE_RESULT;
  },
  blacklistReviewers: () => FIND_MANY_RESULT,
  blacklistReviewer: ({ where }: { where: { id: string } }) => {
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

describe("BlacklistReviewer", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BlacklistReviewerService,
          useValue: service,
        },
      ],
      controllers: [BlacklistReviewerController],
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

  test("POST /blacklistReviewers", async () => {
    await request(app.getHttpServer())
      .post("/blacklistReviewers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /blacklistReviewers", async () => {
    await request(app.getHttpServer())
      .get("/blacklistReviewers")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /blacklistReviewers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blacklistReviewers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /blacklistReviewers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blacklistReviewers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /blacklistReviewers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/blacklistReviewers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/blacklistReviewers")
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
