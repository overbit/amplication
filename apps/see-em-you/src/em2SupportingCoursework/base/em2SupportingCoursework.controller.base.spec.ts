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
import { Em2SupportingCourseworkController } from "../em2SupportingCoursework.controller";
import { Em2SupportingCourseworkService } from "../em2SupportingCoursework.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: 42,
  dataStructuresNumber: "exampleDataStructuresNumber",
  dataStructuresTitle: "exampleDataStructuresTitle",
  id: 42,
  makerkitsDescription: "exampleMakerkitsDescription",
  makerkitsDescription2: "exampleMakerkitsDescription2",
  msitExperience: "exampleMsitExperience",
  programmingDescription: "exampleProgrammingDescription",
  programmingDescription2: "exampleProgrammingDescription2",
  statisticsNumber: "exampleStatisticsNumber",
  statisticsTitle: "exampleStatisticsTitle",
};
const CREATE_RESULT = {
  applicationId: 42,
  dataStructuresNumber: "exampleDataStructuresNumber",
  dataStructuresTitle: "exampleDataStructuresTitle",
  id: 42,
  makerkitsDescription: "exampleMakerkitsDescription",
  makerkitsDescription2: "exampleMakerkitsDescription2",
  msitExperience: "exampleMsitExperience",
  programmingDescription: "exampleProgrammingDescription",
  programmingDescription2: "exampleProgrammingDescription2",
  statisticsNumber: "exampleStatisticsNumber",
  statisticsTitle: "exampleStatisticsTitle",
};
const FIND_MANY_RESULT = [
  {
    applicationId: 42,
    dataStructuresNumber: "exampleDataStructuresNumber",
    dataStructuresTitle: "exampleDataStructuresTitle",
    id: 42,
    makerkitsDescription: "exampleMakerkitsDescription",
    makerkitsDescription2: "exampleMakerkitsDescription2",
    msitExperience: "exampleMsitExperience",
    programmingDescription: "exampleProgrammingDescription",
    programmingDescription2: "exampleProgrammingDescription2",
    statisticsNumber: "exampleStatisticsNumber",
    statisticsTitle: "exampleStatisticsTitle",
  },
];
const FIND_ONE_RESULT = {
  applicationId: 42,
  dataStructuresNumber: "exampleDataStructuresNumber",
  dataStructuresTitle: "exampleDataStructuresTitle",
  id: 42,
  makerkitsDescription: "exampleMakerkitsDescription",
  makerkitsDescription2: "exampleMakerkitsDescription2",
  msitExperience: "exampleMsitExperience",
  programmingDescription: "exampleProgrammingDescription",
  programmingDescription2: "exampleProgrammingDescription2",
  statisticsNumber: "exampleStatisticsNumber",
  statisticsTitle: "exampleStatisticsTitle",
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

describe("Em2SupportingCoursework", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: Em2SupportingCourseworkService,
          useValue: service,
        },
      ],
      controllers: [Em2SupportingCourseworkController],
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

  test("POST /em2SupportingCourseworks", async () => {
    await request(app.getHttpServer())
      .post("/em2SupportingCourseworks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /em2SupportingCourseworks", async () => {
    await request(app.getHttpServer())
      .get("/em2SupportingCourseworks")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /em2SupportingCourseworks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/em2SupportingCourseworks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /em2SupportingCourseworks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/em2SupportingCourseworks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /em2SupportingCourseworks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/em2SupportingCourseworks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/em2SupportingCourseworks")
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
