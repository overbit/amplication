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
import { MlSupportingCourseworkController } from "../mlSupportingCoursework.controller";
import { MlSupportingCourseworkService } from "../mlSupportingCoursework.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  introCourse2Grade: "exampleIntroCourse2Grade",
  introCourse2Num: "exampleIntroCourse2Num",
  introCourse2Semester: "exampleIntroCourse2Semester",
  introCourseGrade: "exampleIntroCourseGrade",
  introCourseNum: "exampleIntroCourseNum",
  introCourseSemester: "exampleIntroCourseSemester",
  ml1CourseGrade: "exampleMl1CourseGrade",
  ml1CourseNum: "exampleMl1CourseNum",
  ml1CourseSemester: "exampleMl1CourseSemester",
  ml2CourseGrade: "exampleMl2CourseGrade",
  ml2CourseNum: "exampleMl2CourseNum",
  ml2CourseSemester: "exampleMl2CourseSemester",
};
const CREATE_RESULT = {
  id: 42,
  introCourse2Grade: "exampleIntroCourse2Grade",
  introCourse2Num: "exampleIntroCourse2Num",
  introCourse2Semester: "exampleIntroCourse2Semester",
  introCourseGrade: "exampleIntroCourseGrade",
  introCourseNum: "exampleIntroCourseNum",
  introCourseSemester: "exampleIntroCourseSemester",
  ml1CourseGrade: "exampleMl1CourseGrade",
  ml1CourseNum: "exampleMl1CourseNum",
  ml1CourseSemester: "exampleMl1CourseSemester",
  ml2CourseGrade: "exampleMl2CourseGrade",
  ml2CourseNum: "exampleMl2CourseNum",
  ml2CourseSemester: "exampleMl2CourseSemester",
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    introCourse2Grade: "exampleIntroCourse2Grade",
    introCourse2Num: "exampleIntroCourse2Num",
    introCourse2Semester: "exampleIntroCourse2Semester",
    introCourseGrade: "exampleIntroCourseGrade",
    introCourseNum: "exampleIntroCourseNum",
    introCourseSemester: "exampleIntroCourseSemester",
    ml1CourseGrade: "exampleMl1CourseGrade",
    ml1CourseNum: "exampleMl1CourseNum",
    ml1CourseSemester: "exampleMl1CourseSemester",
    ml2CourseGrade: "exampleMl2CourseGrade",
    ml2CourseNum: "exampleMl2CourseNum",
    ml2CourseSemester: "exampleMl2CourseSemester",
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  introCourse2Grade: "exampleIntroCourse2Grade",
  introCourse2Num: "exampleIntroCourse2Num",
  introCourse2Semester: "exampleIntroCourse2Semester",
  introCourseGrade: "exampleIntroCourseGrade",
  introCourseNum: "exampleIntroCourseNum",
  introCourseSemester: "exampleIntroCourseSemester",
  ml1CourseGrade: "exampleMl1CourseGrade",
  ml1CourseNum: "exampleMl1CourseNum",
  ml1CourseSemester: "exampleMl1CourseSemester",
  ml2CourseGrade: "exampleMl2CourseGrade",
  ml2CourseNum: "exampleMl2CourseNum",
  ml2CourseSemester: "exampleMl2CourseSemester",
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

describe("MlSupportingCoursework", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MlSupportingCourseworkService,
          useValue: service,
        },
      ],
      controllers: [MlSupportingCourseworkController],
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

  test("POST /mlSupportingCourseworks", async () => {
    await request(app.getHttpServer())
      .post("/mlSupportingCourseworks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mlSupportingCourseworks", async () => {
    await request(app.getHttpServer())
      .get("/mlSupportingCourseworks")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mlSupportingCourseworks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mlSupportingCourseworks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mlSupportingCourseworks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mlSupportingCourseworks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mlSupportingCourseworks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mlSupportingCourseworks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mlSupportingCourseworks")
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
