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
import { PromotionHistoryController } from "../promotionHistory.controller";
import { PromotionHistoryService } from "../promotionHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  programId: 42,
  statusTime: new Date(),
  round: 42,
  usersId: 42,
  id: "exampleId",
};
const CREATE_RESULT = {
  programId: 42,
  statusTime: new Date(),
  round: 42,
  usersId: 42,
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    programId: 42,
    statusTime: new Date(),
    round: 42,
    usersId: 42,
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  programId: 42,
  statusTime: new Date(),
  round: 42,
  usersId: 42,
  id: "exampleId",
};

const service = {
  createPromotionHistory() {
    return CREATE_RESULT;
  },
  promotionHistories: () => FIND_MANY_RESULT,
  promotionHistory: ({ where }: { where: { id: string } }) => {
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

describe("PromotionHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PromotionHistoryService,
          useValue: service,
        },
      ],
      controllers: [PromotionHistoryController],
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

  test("POST /promotionHistories", async () => {
    await request(app.getHttpServer())
      .post("/promotionHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        statusTime: CREATE_RESULT.statusTime.toISOString(),
      });
  });

  test("GET /promotionHistories", async () => {
    await request(app.getHttpServer())
      .get("/promotionHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          statusTime: FIND_MANY_RESULT[0].statusTime.toISOString(),
        },
      ]);
  });

  test("GET /promotionHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/promotionHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /promotionHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/promotionHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        statusTime: FIND_ONE_RESULT.statusTime.toISOString(),
      });
  });

  test("POST /promotionHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/promotionHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        statusTime: CREATE_RESULT.statusTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/promotionHistories")
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
