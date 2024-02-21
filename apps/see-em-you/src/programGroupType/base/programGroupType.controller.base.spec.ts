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
import { ProgramGroupTypeController } from "../programGroupType.controller";
import { ProgramGroupTypeService } from "../programGroupType.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  programGroupTypeName: "exampleProgramGroupTypeName",
  programGroupTypeDescription: "exampleProgramGroupTypeDescription",
  id: 42,
};
const CREATE_RESULT = {
  programGroupTypeName: "exampleProgramGroupTypeName",
  programGroupTypeDescription: "exampleProgramGroupTypeDescription",
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    programGroupTypeName: "exampleProgramGroupTypeName",
    programGroupTypeDescription: "exampleProgramGroupTypeDescription",
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  programGroupTypeName: "exampleProgramGroupTypeName",
  programGroupTypeDescription: "exampleProgramGroupTypeDescription",
  id: 42,
};

const service = {
  createProgramGroupType() {
    return CREATE_RESULT;
  },
  programGroupTypes: () => FIND_MANY_RESULT,
  programGroupType: ({ where }: { where: { id: string } }) => {
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

describe("ProgramGroupType", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProgramGroupTypeService,
          useValue: service,
        },
      ],
      controllers: [ProgramGroupTypeController],
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

  test("POST /programGroupTypes", async () => {
    await request(app.getHttpServer())
      .post("/programGroupTypes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /programGroupTypes", async () => {
    await request(app.getHttpServer())
      .get("/programGroupTypes")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /programGroupTypes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/programGroupTypes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /programGroupTypes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/programGroupTypes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /programGroupTypes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/programGroupTypes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/programGroupTypes")
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
