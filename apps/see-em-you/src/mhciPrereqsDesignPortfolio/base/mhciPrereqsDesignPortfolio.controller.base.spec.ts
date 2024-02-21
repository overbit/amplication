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
import { MhciPrereqsDesignPortfolioController } from "../mhciPrereqsDesignPortfolio.controller";
import { MhciPrereqsDesignPortfolioService } from "../mhciPrereqsDesignPortfolio.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  url: "exampleUrl",
  description: "exampleDescription",
  applicationId: 42,
  programId: 42,
  periodId: 42,
  id: 42,
};
const CREATE_RESULT = {
  url: "exampleUrl",
  description: "exampleDescription",
  applicationId: 42,
  programId: 42,
  periodId: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    url: "exampleUrl",
    description: "exampleDescription",
    applicationId: 42,
    programId: 42,
    periodId: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  url: "exampleUrl",
  description: "exampleDescription",
  applicationId: 42,
  programId: 42,
  periodId: 42,
  id: 42,
};

const service = {
  createMhciPrereqsDesignPortfolio() {
    return CREATE_RESULT;
  },
  mhciPrereqsDesignPortfolios: () => FIND_MANY_RESULT,
  mhciPrereqsDesignPortfolio: ({ where }: { where: { id: string } }) => {
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

describe("MhciPrereqsDesignPortfolio", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MhciPrereqsDesignPortfolioService,
          useValue: service,
        },
      ],
      controllers: [MhciPrereqsDesignPortfolioController],
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

  test("POST /mhciPrereqsDesignPortfolios", async () => {
    await request(app.getHttpServer())
      .post("/mhciPrereqsDesignPortfolios")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mhciPrereqsDesignPortfolios", async () => {
    await request(app.getHttpServer())
      .get("/mhciPrereqsDesignPortfolios")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mhciPrereqsDesignPortfolios/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciPrereqsDesignPortfolios"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mhciPrereqsDesignPortfolios/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciPrereqsDesignPortfolios"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mhciPrereqsDesignPortfolios existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mhciPrereqsDesignPortfolios")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mhciPrereqsDesignPortfolios")
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
