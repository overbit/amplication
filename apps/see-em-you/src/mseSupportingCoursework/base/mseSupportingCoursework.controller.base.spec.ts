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
import { MseSupportingCourseworkController } from "../mseSupportingCoursework.controller";
import { MseSupportingCourseworkService } from "../mseSupportingCoursework.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  algCourseGrade: "exampleAlgCourseGrade",
  algCourseName: "exampleAlgCourseName",
  algCourseNum: "exampleAlgCourseNum",
  appId: 42,
  dmCourseGrade: "exampleDmCourseGrade",
  dmCourseName: "exampleDmCourseName",
  dmCourseNum: "exampleDmCourseNum",
  dsCourseGrade: "exampleDsCourseGrade",
  dsCourseName: "exampleDsCourseName",
  dsCourseNum: "exampleDsCourseNum",
  id: 42,
  prog1CourseGrade: "exampleProg1CourseGrade",
  prog1CourseName: "exampleProg1CourseName",
  prog1CourseNum: "exampleProg1CourseNum",
  prog2CourseGrade: "exampleProg2CourseGrade",
  prog2CourseName: "exampleProg2CourseName",
  prog2CourseNum: "exampleProg2CourseNum",
};
const CREATE_RESULT = {
  algCourseGrade: "exampleAlgCourseGrade",
  algCourseName: "exampleAlgCourseName",
  algCourseNum: "exampleAlgCourseNum",
  appId: 42,
  dmCourseGrade: "exampleDmCourseGrade",
  dmCourseName: "exampleDmCourseName",
  dmCourseNum: "exampleDmCourseNum",
  dsCourseGrade: "exampleDsCourseGrade",
  dsCourseName: "exampleDsCourseName",
  dsCourseNum: "exampleDsCourseNum",
  id: 42,
  prog1CourseGrade: "exampleProg1CourseGrade",
  prog1CourseName: "exampleProg1CourseName",
  prog1CourseNum: "exampleProg1CourseNum",
  prog2CourseGrade: "exampleProg2CourseGrade",
  prog2CourseName: "exampleProg2CourseName",
  prog2CourseNum: "exampleProg2CourseNum",
};
const FIND_MANY_RESULT = [
  {
    algCourseGrade: "exampleAlgCourseGrade",
    algCourseName: "exampleAlgCourseName",
    algCourseNum: "exampleAlgCourseNum",
    appId: 42,
    dmCourseGrade: "exampleDmCourseGrade",
    dmCourseName: "exampleDmCourseName",
    dmCourseNum: "exampleDmCourseNum",
    dsCourseGrade: "exampleDsCourseGrade",
    dsCourseName: "exampleDsCourseName",
    dsCourseNum: "exampleDsCourseNum",
    id: 42,
    prog1CourseGrade: "exampleProg1CourseGrade",
    prog1CourseName: "exampleProg1CourseName",
    prog1CourseNum: "exampleProg1CourseNum",
    prog2CourseGrade: "exampleProg2CourseGrade",
    prog2CourseName: "exampleProg2CourseName",
    prog2CourseNum: "exampleProg2CourseNum",
  },
];
const FIND_ONE_RESULT = {
  algCourseGrade: "exampleAlgCourseGrade",
  algCourseName: "exampleAlgCourseName",
  algCourseNum: "exampleAlgCourseNum",
  appId: 42,
  dmCourseGrade: "exampleDmCourseGrade",
  dmCourseName: "exampleDmCourseName",
  dmCourseNum: "exampleDmCourseNum",
  dsCourseGrade: "exampleDsCourseGrade",
  dsCourseName: "exampleDsCourseName",
  dsCourseNum: "exampleDsCourseNum",
  id: 42,
  prog1CourseGrade: "exampleProg1CourseGrade",
  prog1CourseName: "exampleProg1CourseName",
  prog1CourseNum: "exampleProg1CourseNum",
  prog2CourseGrade: "exampleProg2CourseGrade",
  prog2CourseName: "exampleProg2CourseName",
  prog2CourseNum: "exampleProg2CourseNum",
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

describe("MseSupportingCoursework", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MseSupportingCourseworkService,
          useValue: service,
        },
      ],
      controllers: [MseSupportingCourseworkController],
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

  test("POST /mseSupportingCourseworks", async () => {
    await request(app.getHttpServer())
      .post("/mseSupportingCourseworks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mseSupportingCourseworks", async () => {
    await request(app.getHttpServer())
      .get("/mseSupportingCourseworks")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mseSupportingCourseworks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mseSupportingCourseworks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mseSupportingCourseworks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mseSupportingCourseworks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mseSupportingCourseworks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mseSupportingCourseworks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mseSupportingCourseworks")
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
