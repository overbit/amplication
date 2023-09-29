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
import { Em2SopController } from "../em2Sop.controller";
import { Em2SopService } from "../em2Sop.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  additionalInfo: "exampleAdditionalInfo",
  applicationId: 42,
  background: "exampleBackground",
  id: 42,
  objective: "exampleObjective",
  researchExperience: "exampleResearchExperience",
  taInterest: "exampleTaInterest",
};
const CREATE_RESULT = {
  additionalInfo: "exampleAdditionalInfo",
  applicationId: 42,
  background: "exampleBackground",
  id: 42,
  objective: "exampleObjective",
  researchExperience: "exampleResearchExperience",
  taInterest: "exampleTaInterest",
};
const FIND_MANY_RESULT = [
  {
    additionalInfo: "exampleAdditionalInfo",
    applicationId: 42,
    background: "exampleBackground",
    id: 42,
    objective: "exampleObjective",
    researchExperience: "exampleResearchExperience",
    taInterest: "exampleTaInterest",
  },
];
const FIND_ONE_RESULT = {
  additionalInfo: "exampleAdditionalInfo",
  applicationId: 42,
  background: "exampleBackground",
  id: 42,
  objective: "exampleObjective",
  researchExperience: "exampleResearchExperience",
  taInterest: "exampleTaInterest",
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

describe("Em2Sop", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: Em2SopService,
          useValue: service,
        },
      ],
      controllers: [Em2SopController],
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

  test("POST /em2Sops", async () => {
    await request(app.getHttpServer())
      .post("/em2Sops")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /em2Sops", async () => {
    await request(app.getHttpServer())
      .get("/em2Sops")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /em2Sops/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/em2Sops"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /em2Sops/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/em2Sops"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /em2Sops existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/em2Sops")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/em2Sops")
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
