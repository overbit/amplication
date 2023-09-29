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
import { ParentInfoController } from "../parentInfo.controller";
import { ParentInfoService } from "../parentInfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  appId: 42,
  created: new Date(),
  id: 42,
  modified: new Date(),
  p1EdLevel: 42,
  p1Profession: "exampleP1Profession",
  p2EdLevel: 42,
  p2Profession: "exampleP2Profession",
};
const CREATE_RESULT = {
  appId: 42,
  created: new Date(),
  id: 42,
  modified: new Date(),
  p1EdLevel: 42,
  p1Profession: "exampleP1Profession",
  p2EdLevel: 42,
  p2Profession: "exampleP2Profession",
};
const FIND_MANY_RESULT = [
  {
    appId: 42,
    created: new Date(),
    id: 42,
    modified: new Date(),
    p1EdLevel: 42,
    p1Profession: "exampleP1Profession",
    p2EdLevel: 42,
    p2Profession: "exampleP2Profession",
  },
];
const FIND_ONE_RESULT = {
  appId: 42,
  created: new Date(),
  id: 42,
  modified: new Date(),
  p1EdLevel: 42,
  p1Profession: "exampleP1Profession",
  p2EdLevel: 42,
  p2Profession: "exampleP2Profession",
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

describe("ParentInfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ParentInfoService,
          useValue: service,
        },
      ],
      controllers: [ParentInfoController],
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

  test("POST /parentInfos", async () => {
    await request(app.getHttpServer())
      .post("/parentInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
      });
  });

  test("GET /parentInfos", async () => {
    await request(app.getHttpServer())
      .get("/parentInfos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
        },
      ]);
  });

  test("GET /parentInfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/parentInfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /parentInfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/parentInfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
      });
  });

  test("POST /parentInfos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/parentInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
      })
      .then(function () {
        agent
          .post("/parentInfos")
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
