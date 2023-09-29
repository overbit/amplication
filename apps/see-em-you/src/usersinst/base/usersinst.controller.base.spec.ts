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
import { UsersinstController } from "../usersinst.controller";
import { UsersinstService } from "../usersinst.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  classRank: "exampleClassRank",
  collegeName: "exampleCollegeName",
  convertedGpa: "exampleConvertedGpa",
  datafileId: 42,
  dateEntered: new Date(),
  dateGrad: new Date(),
  dateLeft: new Date(),
  degree: "exampleDegree",
  degreeLevel: 42,
  degreeLevelOther: "exampleDegreeLevelOther",
  educationtype: 42,
  gpa: "exampleGpa",
  gpaMajor: "exampleGpaMajor",
  gpaScale: 42,
  id: 42,
  instituteId: 42,
  joint: 42,
  jointInstituteId: 42,
  major1: "exampleMajor1",
  major2: "exampleMajor2",
  major3: "exampleMajor3",
  minor1: "exampleMinor1",
  minor2: "exampleMinor2",
  transscriptreceived: "true",
  userId: 42,
};
const CREATE_RESULT = {
  applicationId: 42,
  classRank: "exampleClassRank",
  collegeName: "exampleCollegeName",
  convertedGpa: "exampleConvertedGpa",
  datafileId: 42,
  dateEntered: new Date(),
  dateGrad: new Date(),
  dateLeft: new Date(),
  degree: "exampleDegree",
  degreeLevel: 42,
  degreeLevelOther: "exampleDegreeLevelOther",
  educationtype: 42,
  gpa: "exampleGpa",
  gpaMajor: "exampleGpaMajor",
  gpaScale: 42,
  id: 42,
  instituteId: 42,
  joint: 42,
  jointInstituteId: 42,
  major1: "exampleMajor1",
  major2: "exampleMajor2",
  major3: "exampleMajor3",
  minor1: "exampleMinor1",
  minor2: "exampleMinor2",
  transscriptreceived: "true",
  userId: 42,
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    classRank: "exampleClassRank",
    collegeName: "exampleCollegeName",
    convertedGpa: "exampleConvertedGpa",
    datafileId: 42,
    dateEntered: new Date(),
    dateGrad: new Date(),
    dateLeft: new Date(),
    degree: "exampleDegree",
    degreeLevel: 42,
    degreeLevelOther: "exampleDegreeLevelOther",
    educationtype: 42,
    gpa: "exampleGpa",
    gpaMajor: "exampleGpaMajor",
    gpaScale: 42,
    id: 42,
    instituteId: 42,
    joint: 42,
    jointInstituteId: 42,
    major1: "exampleMajor1",
    major2: "exampleMajor2",
    major3: "exampleMajor3",
    minor1: "exampleMinor1",
    minor2: "exampleMinor2",
    transscriptreceived: "true",
    userId: 42,
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  classRank: "exampleClassRank",
  collegeName: "exampleCollegeName",
  convertedGpa: "exampleConvertedGpa",
  datafileId: 42,
  dateEntered: new Date(),
  dateGrad: new Date(),
  dateLeft: new Date(),
  degree: "exampleDegree",
  degreeLevel: 42,
  degreeLevelOther: "exampleDegreeLevelOther",
  educationtype: 42,
  gpa: "exampleGpa",
  gpaMajor: "exampleGpaMajor",
  gpaScale: 42,
  id: 42,
  instituteId: 42,
  joint: 42,
  jointInstituteId: 42,
  major1: "exampleMajor1",
  major2: "exampleMajor2",
  major3: "exampleMajor3",
  minor1: "exampleMinor1",
  minor2: "exampleMinor2",
  transscriptreceived: "true",
  userId: 42,
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

describe("Usersinst", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UsersinstService,
          useValue: service,
        },
      ],
      controllers: [UsersinstController],
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

  test("POST /usersinsts", async () => {
    await request(app.getHttpServer())
      .post("/usersinsts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dateEntered: CREATE_RESULT.dateEntered.toISOString(),
        dateGrad: CREATE_RESULT.dateGrad.toISOString(),
        dateLeft: CREATE_RESULT.dateLeft.toISOString(),
      });
  });

  test("GET /usersinsts", async () => {
    await request(app.getHttpServer())
      .get("/usersinsts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          dateEntered: FIND_MANY_RESULT[0].dateEntered.toISOString(),
          dateGrad: FIND_MANY_RESULT[0].dateGrad.toISOString(),
          dateLeft: FIND_MANY_RESULT[0].dateLeft.toISOString(),
        },
      ]);
  });

  test("GET /usersinsts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/usersinsts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /usersinsts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/usersinsts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        dateEntered: FIND_ONE_RESULT.dateEntered.toISOString(),
        dateGrad: FIND_ONE_RESULT.dateGrad.toISOString(),
        dateLeft: FIND_ONE_RESULT.dateLeft.toISOString(),
      });
  });

  test("POST /usersinsts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/usersinsts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dateEntered: CREATE_RESULT.dateEntered.toISOString(),
        dateGrad: CREATE_RESULT.dateGrad.toISOString(),
        dateLeft: CREATE_RESULT.dateLeft.toISOString(),
      })
      .then(function () {
        agent
          .post("/usersinsts")
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
