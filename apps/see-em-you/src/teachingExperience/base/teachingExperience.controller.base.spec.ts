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
import { TeachingExperienceController } from "../teachingExperience.controller";
import { TeachingExperienceService } from "../teachingExperience.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  orderEntered: 42,
  institution: "exampleInstitution",
  address: "exampleAddress",
  coursesTaught: "exampleCoursesTaught",
  startDate: new Date(),
  endDate: "exampleEndDate",
  id: 42,
};
const CREATE_RESULT = {
  applicationId: 42,
  orderEntered: 42,
  institution: "exampleInstitution",
  address: "exampleAddress",
  coursesTaught: "exampleCoursesTaught",
  startDate: new Date(),
  endDate: "exampleEndDate",
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    orderEntered: 42,
    institution: "exampleInstitution",
    address: "exampleAddress",
    coursesTaught: "exampleCoursesTaught",
    startDate: new Date(),
    endDate: "exampleEndDate",
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  orderEntered: 42,
  institution: "exampleInstitution",
  address: "exampleAddress",
  coursesTaught: "exampleCoursesTaught",
  startDate: new Date(),
  endDate: "exampleEndDate",
  id: 42,
};

const service = {
  createTeachingExperience() {
    return CREATE_RESULT;
  },
  teachingExperiences: () => FIND_MANY_RESULT,
  teachingExperience: ({ where }: { where: { id: string } }) => {
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

describe("TeachingExperience", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TeachingExperienceService,
          useValue: service,
        },
      ],
      controllers: [TeachingExperienceController],
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

  test("POST /teachingExperiences", async () => {
    await request(app.getHttpServer())
      .post("/teachingExperiences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        startDate: CREATE_RESULT.startDate.toISOString(),
      });
  });

  test("GET /teachingExperiences", async () => {
    await request(app.getHttpServer())
      .get("/teachingExperiences")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
        },
      ]);
  });

  test("GET /teachingExperiences/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teachingExperiences"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /teachingExperiences/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teachingExperiences"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
      });
  });

  test("POST /teachingExperiences existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/teachingExperiences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        startDate: CREATE_RESULT.startDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/teachingExperiences")
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
