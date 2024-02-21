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
import { LuApplicationStartSemesterController } from "../luApplicationStartSemester.controller";
import { LuApplicationStartSemesterService } from "../luApplicationStartSemester.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  semester: "exampleSemester",
  year: "exampleYear",
  id: 42,
};
const CREATE_RESULT = {
  semester: "exampleSemester",
  year: "exampleYear",
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    semester: "exampleSemester",
    year: "exampleYear",
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  semester: "exampleSemester",
  year: "exampleYear",
  id: 42,
};

const service = {
  createLuApplicationStartSemester() {
    return CREATE_RESULT;
  },
  luApplicationStartSemesters: () => FIND_MANY_RESULT,
  luApplicationStartSemester: ({ where }: { where: { id: string } }) => {
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

describe("LuApplicationStartSemester", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LuApplicationStartSemesterService,
          useValue: service,
        },
      ],
      controllers: [LuApplicationStartSemesterController],
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

  test("POST /luApplicationStartSemesters", async () => {
    await request(app.getHttpServer())
      .post("/luApplicationStartSemesters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /luApplicationStartSemesters", async () => {
    await request(app.getHttpServer())
      .get("/luApplicationStartSemesters")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /luApplicationStartSemesters/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luApplicationStartSemesters"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /luApplicationStartSemesters/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/luApplicationStartSemesters"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /luApplicationStartSemesters existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/luApplicationStartSemesters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/luApplicationStartSemesters")
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
