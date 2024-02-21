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
import { IniYearsExperienceController } from "../iniYearsExperience.controller";
import { IniYearsExperienceService } from "../iniYearsExperience.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  fullTimeProfessional: 42,
  relevantIndustry: 42,
  id: 42,
};
const CREATE_RESULT = {
  applicationId: 42,
  fullTimeProfessional: 42,
  relevantIndustry: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    fullTimeProfessional: 42,
    relevantIndustry: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  fullTimeProfessional: 42,
  relevantIndustry: 42,
  id: 42,
};

const service = {
  createIniYearsExperience() {
    return CREATE_RESULT;
  },
  iniYearsExperiences: () => FIND_MANY_RESULT,
  iniYearsExperience: ({ where }: { where: { id: string } }) => {
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

describe("IniYearsExperience", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: IniYearsExperienceService,
          useValue: service,
        },
      ],
      controllers: [IniYearsExperienceController],
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

  test("POST /iniYearsExperiences", async () => {
    await request(app.getHttpServer())
      .post("/iniYearsExperiences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /iniYearsExperiences", async () => {
    await request(app.getHttpServer())
      .get("/iniYearsExperiences")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /iniYearsExperiences/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/iniYearsExperiences"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /iniYearsExperiences/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/iniYearsExperiences"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /iniYearsExperiences existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/iniYearsExperiences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/iniYearsExperiences")
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
