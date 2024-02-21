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
import { MhciPrereqsStatusController } from "../mhciPrereqsStatus.controller";
import { MhciPrereqsStatusService } from "../mhciPrereqsStatus.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  reviewerLuUsersUsertypesId: 42,
  reviewerExplanation: "exampleReviewerExplanation",
  reviewerTimestamp: new Date(),
  programId: 42,
  id: 42,
};
const CREATE_RESULT = {
  reviewerLuUsersUsertypesId: 42,
  reviewerExplanation: "exampleReviewerExplanation",
  reviewerTimestamp: new Date(),
  programId: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    reviewerLuUsersUsertypesId: 42,
    reviewerExplanation: "exampleReviewerExplanation",
    reviewerTimestamp: new Date(),
    programId: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  reviewerLuUsersUsertypesId: 42,
  reviewerExplanation: "exampleReviewerExplanation",
  reviewerTimestamp: new Date(),
  programId: 42,
  id: 42,
};

const service = {
  createMhciPrereqsStatus() {
    return CREATE_RESULT;
  },
  mhciPrereqsStatuses: () => FIND_MANY_RESULT,
  mhciPrereqsStatus: ({ where }: { where: { id: string } }) => {
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

describe("MhciPrereqsStatus", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MhciPrereqsStatusService,
          useValue: service,
        },
      ],
      controllers: [MhciPrereqsStatusController],
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

  test("POST /mhciPrereqsStatuses", async () => {
    await request(app.getHttpServer())
      .post("/mhciPrereqsStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        reviewerTimestamp: CREATE_RESULT.reviewerTimestamp.toISOString(),
      });
  });

  test("GET /mhciPrereqsStatuses", async () => {
    await request(app.getHttpServer())
      .get("/mhciPrereqsStatuses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          reviewerTimestamp:
            FIND_MANY_RESULT[0].reviewerTimestamp.toISOString(),
        },
      ]);
  });

  test("GET /mhciPrereqsStatuses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciPrereqsStatuses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mhciPrereqsStatuses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciPrereqsStatuses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        reviewerTimestamp: FIND_ONE_RESULT.reviewerTimestamp.toISOString(),
      });
  });

  test("POST /mhciPrereqsStatuses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mhciPrereqsStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        reviewerTimestamp: CREATE_RESULT.reviewerTimestamp.toISOString(),
      })
      .then(function () {
        agent
          .post("/mhciPrereqsStatuses")
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
