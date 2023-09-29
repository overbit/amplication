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
import { FolderLabelInfoController } from "../folderLabelInfo.controller";
import { FolderLabelInfoService } from "../folderLabelInfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  lastLabelColumn: 42,
  lastLabelRow: 42,
  lastRanTime: new Date(),
  periodId: 42,
};
const CREATE_RESULT = {
  id: 42,
  lastLabelColumn: 42,
  lastLabelRow: 42,
  lastRanTime: new Date(),
  periodId: 42,
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    lastLabelColumn: 42,
    lastLabelRow: 42,
    lastRanTime: new Date(),
    periodId: 42,
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  lastLabelColumn: 42,
  lastLabelRow: 42,
  lastRanTime: new Date(),
  periodId: 42,
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

describe("FolderLabelInfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FolderLabelInfoService,
          useValue: service,
        },
      ],
      controllers: [FolderLabelInfoController],
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

  test("POST /folderLabelInfos", async () => {
    await request(app.getHttpServer())
      .post("/folderLabelInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastRanTime: CREATE_RESULT.lastRanTime.toISOString(),
      });
  });

  test("GET /folderLabelInfos", async () => {
    await request(app.getHttpServer())
      .get("/folderLabelInfos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          lastRanTime: FIND_MANY_RESULT[0].lastRanTime.toISOString(),
        },
      ]);
  });

  test("GET /folderLabelInfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/folderLabelInfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /folderLabelInfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/folderLabelInfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        lastRanTime: FIND_ONE_RESULT.lastRanTime.toISOString(),
      });
  });

  test("POST /folderLabelInfos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/folderLabelInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastRanTime: CREATE_RESULT.lastRanTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/folderLabelInfos")
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
