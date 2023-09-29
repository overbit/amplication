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
import { VeteranInfoController } from "../veteranInfo.controller";
import { VeteranInfoService } from "../veteranInfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  branch: "exampleBranch",
  discharge: "exampleDischarge",
  enddate: new Date(),
  id: 42,
  startdate: new Date(),
  status: "exampleStatus",
  statusEnroll: "exampleStatusEnroll",
  userId: 42,
};
const CREATE_RESULT = {
  branch: "exampleBranch",
  discharge: "exampleDischarge",
  enddate: new Date(),
  id: 42,
  startdate: new Date(),
  status: "exampleStatus",
  statusEnroll: "exampleStatusEnroll",
  userId: 42,
};
const FIND_MANY_RESULT = [
  {
    branch: "exampleBranch",
    discharge: "exampleDischarge",
    enddate: new Date(),
    id: 42,
    startdate: new Date(),
    status: "exampleStatus",
    statusEnroll: "exampleStatusEnroll",
    userId: 42,
  },
];
const FIND_ONE_RESULT = {
  branch: "exampleBranch",
  discharge: "exampleDischarge",
  enddate: new Date(),
  id: 42,
  startdate: new Date(),
  status: "exampleStatus",
  statusEnroll: "exampleStatusEnroll",
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

describe("VeteranInfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: VeteranInfoService,
          useValue: service,
        },
      ],
      controllers: [VeteranInfoController],
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

  test("POST /veteranInfos", async () => {
    await request(app.getHttpServer())
      .post("/veteranInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        enddate: CREATE_RESULT.enddate.toISOString(),
        startdate: CREATE_RESULT.startdate.toISOString(),
      });
  });

  test("GET /veteranInfos", async () => {
    await request(app.getHttpServer())
      .get("/veteranInfos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          enddate: FIND_MANY_RESULT[0].enddate.toISOString(),
          startdate: FIND_MANY_RESULT[0].startdate.toISOString(),
        },
      ]);
  });

  test("GET /veteranInfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/veteranInfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /veteranInfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/veteranInfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        enddate: FIND_ONE_RESULT.enddate.toISOString(),
        startdate: FIND_ONE_RESULT.startdate.toISOString(),
      });
  });

  test("POST /veteranInfos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/veteranInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        enddate: CREATE_RESULT.enddate.toISOString(),
        startdate: CREATE_RESULT.startdate.toISOString(),
      })
      .then(function () {
        agent
          .post("/veteranInfos")
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
