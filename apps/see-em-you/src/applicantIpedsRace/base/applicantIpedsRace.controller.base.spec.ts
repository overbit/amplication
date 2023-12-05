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
import { ApplicantIpedsRaceController } from "../applicantIpedsRace.controller";
import { ApplicantIpedsRaceService } from "../applicantIpedsRace.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  ipedsRaceId: 42,
  luUsersUsertypesId: 42,
};
const CREATE_RESULT = {
  id: "exampleId",
  ipedsRaceId: 42,
  luUsersUsertypesId: 42,
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    ipedsRaceId: 42,
    luUsersUsertypesId: 42,
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  ipedsRaceId: 42,
  luUsersUsertypesId: 42,
};

const service = {
  createApplicantIpedsRace() {
    return CREATE_RESULT;
  },
  applicantIpedsRaces: () => FIND_MANY_RESULT,
  applicantIpedsRace: ({ where }: { where: { id: string } }) => {
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

describe("ApplicantIpedsRace", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicantIpedsRaceService,
          useValue: service,
        },
      ],
      controllers: [ApplicantIpedsRaceController],
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

  test("POST /applicantIpedsRaces", async () => {
    await request(app.getHttpServer())
      .post("/applicantIpedsRaces")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /applicantIpedsRaces", async () => {
    await request(app.getHttpServer())
      .get("/applicantIpedsRaces")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /applicantIpedsRaces/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicantIpedsRaces"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicantIpedsRaces/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicantIpedsRaces"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /applicantIpedsRaces existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicantIpedsRaces")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/applicantIpedsRaces")
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
