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
import { ApplicationAdminNoteController } from "../applicationAdminNote.controller";
import { ApplicationAdminNoteService } from "../applicationAdminNote.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  insertTime: new Date(),
  note: "exampleNote",
};
const CREATE_RESULT = {
  id: 42,
  insertTime: new Date(),
  note: "exampleNote",
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    insertTime: new Date(),
    note: "exampleNote",
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  insertTime: new Date(),
  note: "exampleNote",
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

describe("ApplicationAdminNote", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationAdminNoteService,
          useValue: service,
        },
      ],
      controllers: [ApplicationAdminNoteController],
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

  test("POST /applicationAdminNotes", async () => {
    await request(app.getHttpServer())
      .post("/applicationAdminNotes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        insertTime: CREATE_RESULT.insertTime.toISOString(),
      });
  });

  test("GET /applicationAdminNotes", async () => {
    await request(app.getHttpServer())
      .get("/applicationAdminNotes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          insertTime: FIND_MANY_RESULT[0].insertTime.toISOString(),
        },
      ]);
  });

  test("GET /applicationAdminNotes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationAdminNotes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationAdminNotes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationAdminNotes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        insertTime: FIND_ONE_RESULT.insertTime.toISOString(),
      });
  });

  test("POST /applicationAdminNotes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationAdminNotes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        insertTime: CREATE_RESULT.insertTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/applicationAdminNotes")
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
