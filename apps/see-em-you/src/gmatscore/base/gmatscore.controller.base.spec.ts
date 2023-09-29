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
import { GmatscoreController } from "../gmatscore.controller";
import { GmatscoreService } from "../gmatscore.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  analyticalwritingpercentile: 42,
  analyticalwritingscore: 42.424242424,
  datafileId: 42,
  id: 42,
  quantitativepercentile: 42,
  quantitativescore: 42,
  scorereceived: "true",
  testdate: new Date(),
  totalpercentile: 42,
  totalscore: 42,
  verbalpercentile: 42,
  verbalscore: 42,
};
const CREATE_RESULT = {
  analyticalwritingpercentile: 42,
  analyticalwritingscore: 42.424242424,
  datafileId: 42,
  id: 42,
  quantitativepercentile: 42,
  quantitativescore: 42,
  scorereceived: "true",
  testdate: new Date(),
  totalpercentile: 42,
  totalscore: 42,
  verbalpercentile: 42,
  verbalscore: 42,
};
const FIND_MANY_RESULT = [
  {
    analyticalwritingpercentile: 42,
    analyticalwritingscore: 42.424242424,
    datafileId: 42,
    id: 42,
    quantitativepercentile: 42,
    quantitativescore: 42,
    scorereceived: "true",
    testdate: new Date(),
    totalpercentile: 42,
    totalscore: 42,
    verbalpercentile: 42,
    verbalscore: 42,
  },
];
const FIND_ONE_RESULT = {
  analyticalwritingpercentile: 42,
  analyticalwritingscore: 42.424242424,
  datafileId: 42,
  id: 42,
  quantitativepercentile: 42,
  quantitativescore: 42,
  scorereceived: "true",
  testdate: new Date(),
  totalpercentile: 42,
  totalscore: 42,
  verbalpercentile: 42,
  verbalscore: 42,
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

describe("Gmatscore", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GmatscoreService,
          useValue: service,
        },
      ],
      controllers: [GmatscoreController],
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

  test("POST /gmatscores", async () => {
    await request(app.getHttpServer())
      .post("/gmatscores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testdate: CREATE_RESULT.testdate.toISOString(),
      });
  });

  test("GET /gmatscores", async () => {
    await request(app.getHttpServer())
      .get("/gmatscores")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          testdate: FIND_MANY_RESULT[0].testdate.toISOString(),
        },
      ]);
  });

  test("GET /gmatscores/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gmatscores"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /gmatscores/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gmatscores"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        testdate: FIND_ONE_RESULT.testdate.toISOString(),
      });
  });

  test("POST /gmatscores existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/gmatscores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testdate: CREATE_RESULT.testdate.toISOString(),
      })
      .then(function () {
        agent
          .post("/gmatscores")
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
