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
import { GrescoreController } from "../grescore.controller";
import { GrescoreService } from "../grescore.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  analyticalpercentile: "exampleAnalyticalpercentile",
  analyticalscore: "exampleAnalyticalscore",
  analyticalwritingpercentile: "exampleAnalyticalwritingpercentile",
  analyticalwritingscore: 42.424242424,
  applicationId: 42,
  athome: 42,
  datafileId: 42,
  greEmail: "exampleGreEmail",
  id: 42,
  quantitativepercentile: "exampleQuantitativepercentile",
  quantitativescore: "exampleQuantitativescore",
  scorereceived: "true",
  testdate: new Date(),
  verbalpercentile: "exampleVerbalpercentile",
  verbalscore: "exampleVerbalscore",
};
const CREATE_RESULT = {
  analyticalpercentile: "exampleAnalyticalpercentile",
  analyticalscore: "exampleAnalyticalscore",
  analyticalwritingpercentile: "exampleAnalyticalwritingpercentile",
  analyticalwritingscore: 42.424242424,
  applicationId: 42,
  athome: 42,
  datafileId: 42,
  greEmail: "exampleGreEmail",
  id: 42,
  quantitativepercentile: "exampleQuantitativepercentile",
  quantitativescore: "exampleQuantitativescore",
  scorereceived: "true",
  testdate: new Date(),
  verbalpercentile: "exampleVerbalpercentile",
  verbalscore: "exampleVerbalscore",
};
const FIND_MANY_RESULT = [
  {
    analyticalpercentile: "exampleAnalyticalpercentile",
    analyticalscore: "exampleAnalyticalscore",
    analyticalwritingpercentile: "exampleAnalyticalwritingpercentile",
    analyticalwritingscore: 42.424242424,
    applicationId: 42,
    athome: 42,
    datafileId: 42,
    greEmail: "exampleGreEmail",
    id: 42,
    quantitativepercentile: "exampleQuantitativepercentile",
    quantitativescore: "exampleQuantitativescore",
    scorereceived: "true",
    testdate: new Date(),
    verbalpercentile: "exampleVerbalpercentile",
    verbalscore: "exampleVerbalscore",
  },
];
const FIND_ONE_RESULT = {
  analyticalpercentile: "exampleAnalyticalpercentile",
  analyticalscore: "exampleAnalyticalscore",
  analyticalwritingpercentile: "exampleAnalyticalwritingpercentile",
  analyticalwritingscore: 42.424242424,
  applicationId: 42,
  athome: 42,
  datafileId: 42,
  greEmail: "exampleGreEmail",
  id: 42,
  quantitativepercentile: "exampleQuantitativepercentile",
  quantitativescore: "exampleQuantitativescore",
  scorereceived: "true",
  testdate: new Date(),
  verbalpercentile: "exampleVerbalpercentile",
  verbalscore: "exampleVerbalscore",
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

describe("Grescore", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GrescoreService,
          useValue: service,
        },
      ],
      controllers: [GrescoreController],
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

  test("POST /grescores", async () => {
    await request(app.getHttpServer())
      .post("/grescores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testdate: CREATE_RESULT.testdate.toISOString(),
      });
  });

  test("GET /grescores", async () => {
    await request(app.getHttpServer())
      .get("/grescores")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          testdate: FIND_MANY_RESULT[0].testdate.toISOString(),
        },
      ]);
  });

  test("GET /grescores/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/grescores"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /grescores/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/grescores"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        testdate: FIND_ONE_RESULT.testdate.toISOString(),
      });
  });

  test("POST /grescores existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/grescores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testdate: CREATE_RESULT.testdate.toISOString(),
      })
      .then(function () {
        agent
          .post("/grescores")
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
