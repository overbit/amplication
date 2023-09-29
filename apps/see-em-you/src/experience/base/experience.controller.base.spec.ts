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
import { ExperienceController } from "../experience.controller";
import { ExperienceService } from "../experience.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  company: "exampleCompany",
  datafileId: 42,
  endDate: "exampleEndDate",
  experiencetype: 42,
  id: 42,
  jobDescription: "exampleJobDescription",
  jobTitle: "exampleJobTitle",
  orderEntered: 42,
  startDate: new Date(),
  yearsExp: "exampleYearsExp",
};
const CREATE_RESULT = {
  address: "exampleAddress",
  company: "exampleCompany",
  datafileId: 42,
  endDate: "exampleEndDate",
  experiencetype: 42,
  id: 42,
  jobDescription: "exampleJobDescription",
  jobTitle: "exampleJobTitle",
  orderEntered: 42,
  startDate: new Date(),
  yearsExp: "exampleYearsExp",
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    company: "exampleCompany",
    datafileId: 42,
    endDate: "exampleEndDate",
    experiencetype: 42,
    id: 42,
    jobDescription: "exampleJobDescription",
    jobTitle: "exampleJobTitle",
    orderEntered: 42,
    startDate: new Date(),
    yearsExp: "exampleYearsExp",
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  company: "exampleCompany",
  datafileId: 42,
  endDate: "exampleEndDate",
  experiencetype: 42,
  id: 42,
  jobDescription: "exampleJobDescription",
  jobTitle: "exampleJobTitle",
  orderEntered: 42,
  startDate: new Date(),
  yearsExp: "exampleYearsExp",
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

describe("Experience", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ExperienceService,
          useValue: service,
        },
      ],
      controllers: [ExperienceController],
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

  test("POST /experiences", async () => {
    await request(app.getHttpServer())
      .post("/experiences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        startDate: CREATE_RESULT.startDate.toISOString(),
      });
  });

  test("GET /experiences", async () => {
    await request(app.getHttpServer())
      .get("/experiences")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
        },
      ]);
  });

  test("GET /experiences/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/experiences"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /experiences/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/experiences"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
      });
  });

  test("POST /experiences existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/experiences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        startDate: CREATE_RESULT.startDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/experiences")
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
