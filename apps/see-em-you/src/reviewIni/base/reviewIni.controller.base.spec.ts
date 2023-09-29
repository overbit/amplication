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
import { ReviewIniController } from "../reviewIni.controller";
import { ReviewIniService } from "../reviewIni.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  academicComments: "exampleAcademicComments",
  academicProgramComments: "exampleAcademicProgramComments",
  academicRating: 42,
  additionalComments: "exampleAdditionalComments",
  alternativeProgram: 42,
  applicationId: 42,
  departmentId: 42,
  id: 42,
  leadershipComments: "exampleLeadershipComments",
  leadershipRating: 42,
  overallRating: 42,
  researchComments: "exampleResearchComments",
  researchRating: 42,
  reviewerId: 42,
  round: 42,
  technicalComments: "exampleTechnicalComments",
  technicalRating: 42,
  ugProgramComments: "exampleUgProgramComments",
  workExperienceComments: "exampleWorkExperienceComments",
  workExperienceRating: 42,
};
const CREATE_RESULT = {
  academicComments: "exampleAcademicComments",
  academicProgramComments: "exampleAcademicProgramComments",
  academicRating: 42,
  additionalComments: "exampleAdditionalComments",
  alternativeProgram: 42,
  applicationId: 42,
  departmentId: 42,
  id: 42,
  leadershipComments: "exampleLeadershipComments",
  leadershipRating: 42,
  overallRating: 42,
  researchComments: "exampleResearchComments",
  researchRating: 42,
  reviewerId: 42,
  round: 42,
  technicalComments: "exampleTechnicalComments",
  technicalRating: 42,
  ugProgramComments: "exampleUgProgramComments",
  workExperienceComments: "exampleWorkExperienceComments",
  workExperienceRating: 42,
};
const FIND_MANY_RESULT = [
  {
    academicComments: "exampleAcademicComments",
    academicProgramComments: "exampleAcademicProgramComments",
    academicRating: 42,
    additionalComments: "exampleAdditionalComments",
    alternativeProgram: 42,
    applicationId: 42,
    departmentId: 42,
    id: 42,
    leadershipComments: "exampleLeadershipComments",
    leadershipRating: 42,
    overallRating: 42,
    researchComments: "exampleResearchComments",
    researchRating: 42,
    reviewerId: 42,
    round: 42,
    technicalComments: "exampleTechnicalComments",
    technicalRating: 42,
    ugProgramComments: "exampleUgProgramComments",
    workExperienceComments: "exampleWorkExperienceComments",
    workExperienceRating: 42,
  },
];
const FIND_ONE_RESULT = {
  academicComments: "exampleAcademicComments",
  academicProgramComments: "exampleAcademicProgramComments",
  academicRating: 42,
  additionalComments: "exampleAdditionalComments",
  alternativeProgram: 42,
  applicationId: 42,
  departmentId: 42,
  id: 42,
  leadershipComments: "exampleLeadershipComments",
  leadershipRating: 42,
  overallRating: 42,
  researchComments: "exampleResearchComments",
  researchRating: 42,
  reviewerId: 42,
  round: 42,
  technicalComments: "exampleTechnicalComments",
  technicalRating: 42,
  ugProgramComments: "exampleUgProgramComments",
  workExperienceComments: "exampleWorkExperienceComments",
  workExperienceRating: 42,
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

describe("ReviewIni", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ReviewIniService,
          useValue: service,
        },
      ],
      controllers: [ReviewIniController],
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

  test("POST /reviewInis", async () => {
    await request(app.getHttpServer())
      .post("/reviewInis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /reviewInis", async () => {
    await request(app.getHttpServer())
      .get("/reviewInis")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /reviewInis/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reviewInis"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /reviewInis/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reviewInis"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /reviewInis existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/reviewInis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/reviewInis")
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
