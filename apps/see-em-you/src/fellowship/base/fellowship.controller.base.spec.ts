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
import { FellowshipController } from "../fellowship.controller";
import { FellowshipService } from "../fellowship.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  name: "exampleName",
  amount: "exampleAmount",
  status: "exampleStatus",
  appliedDate: new Date(),
  awardDate: new Date(),
  duration: 42,
  datafileId: 42,
  short: 42,
  id: 42,
};
const CREATE_RESULT = {
  name: "exampleName",
  amount: "exampleAmount",
  status: "exampleStatus",
  appliedDate: new Date(),
  awardDate: new Date(),
  duration: 42,
  datafileId: 42,
  short: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    name: "exampleName",
    amount: "exampleAmount",
    status: "exampleStatus",
    appliedDate: new Date(),
    awardDate: new Date(),
    duration: 42,
    datafileId: 42,
    short: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  name: "exampleName",
  amount: "exampleAmount",
  status: "exampleStatus",
  appliedDate: new Date(),
  awardDate: new Date(),
  duration: 42,
  datafileId: 42,
  short: 42,
  id: 42,
};

const service = {
  createFellowship() {
    return CREATE_RESULT;
  },
  fellowships: () => FIND_MANY_RESULT,
  fellowship: ({ where }: { where: { id: string } }) => {
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

describe("Fellowship", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FellowshipService,
          useValue: service,
        },
      ],
      controllers: [FellowshipController],
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

  test("POST /fellowships", async () => {
    await request(app.getHttpServer())
      .post("/fellowships")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        appliedDate: CREATE_RESULT.appliedDate.toISOString(),
        awardDate: CREATE_RESULT.awardDate.toISOString(),
      });
  });

  test("GET /fellowships", async () => {
    await request(app.getHttpServer())
      .get("/fellowships")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          appliedDate: FIND_MANY_RESULT[0].appliedDate.toISOString(),
          awardDate: FIND_MANY_RESULT[0].awardDate.toISOString(),
        },
      ]);
  });

  test("GET /fellowships/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fellowships"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /fellowships/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fellowships"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        appliedDate: FIND_ONE_RESULT.appliedDate.toISOString(),
        awardDate: FIND_ONE_RESULT.awardDate.toISOString(),
      });
  });

  test("POST /fellowships existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/fellowships")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        appliedDate: CREATE_RESULT.appliedDate.toISOString(),
        awardDate: CREATE_RESULT.awardDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/fellowships")
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
