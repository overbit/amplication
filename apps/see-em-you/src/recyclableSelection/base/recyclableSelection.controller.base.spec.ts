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
import { RecyclableSelectionController } from "../recyclableSelection.controller";
import { RecyclableSelectionService } from "../recyclableSelection.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  usersId: 42,
  luUsersUsertypesId: 42,
  departmentId: 42,
  periodId: 42,
  applicationId: 42,
  id: 42,
};
const CREATE_RESULT = {
  usersId: 42,
  luUsersUsertypesId: 42,
  departmentId: 42,
  periodId: 42,
  applicationId: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    usersId: 42,
    luUsersUsertypesId: 42,
    departmentId: 42,
    periodId: 42,
    applicationId: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  usersId: 42,
  luUsersUsertypesId: 42,
  departmentId: 42,
  periodId: 42,
  applicationId: 42,
  id: 42,
};

const service = {
  createRecyclableSelection() {
    return CREATE_RESULT;
  },
  recyclableSelections: () => FIND_MANY_RESULT,
  recyclableSelection: ({ where }: { where: { id: string } }) => {
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

describe("RecyclableSelection", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RecyclableSelectionService,
          useValue: service,
        },
      ],
      controllers: [RecyclableSelectionController],
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

  test("POST /recyclableSelections", async () => {
    await request(app.getHttpServer())
      .post("/recyclableSelections")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /recyclableSelections", async () => {
    await request(app.getHttpServer())
      .get("/recyclableSelections")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /recyclableSelections/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/recyclableSelections"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /recyclableSelections/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/recyclableSelections"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /recyclableSelections existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/recyclableSelections")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/recyclableSelections")
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
