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
import { MhciSlateGreController } from "../mhciSlateGre.controller";
import { MhciSlateGreService } from "../mhciSlateGre.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  greVerbal: "exampleGreVerbal",
  greVerbalPct: "exampleGreVerbalPct",
  greQuantitative: "exampleGreQuantitative",
  greQuantitativePct: "exampleGreQuantitativePct",
  greAnalyticalWriting: "exampleGreAnalyticalWriting",
  greAnalyticalWritingPct: "exampleGreAnalyticalWritingPct",
  id: "exampleId",
};
const CREATE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  greVerbal: "exampleGreVerbal",
  greVerbalPct: "exampleGreVerbalPct",
  greQuantitative: "exampleGreQuantitative",
  greQuantitativePct: "exampleGreQuantitativePct",
  greAnalyticalWriting: "exampleGreAnalyticalWriting",
  greAnalyticalWritingPct: "exampleGreAnalyticalWritingPct",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    prefix: "examplePrefix",
    first: "exampleFirst",
    middle: "exampleMiddle",
    last: "exampleLast",
    greVerbal: "exampleGreVerbal",
    greVerbalPct: "exampleGreVerbalPct",
    greQuantitative: "exampleGreQuantitative",
    greQuantitativePct: "exampleGreQuantitativePct",
    greAnalyticalWriting: "exampleGreAnalyticalWriting",
    greAnalyticalWritingPct: "exampleGreAnalyticalWritingPct",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  prefix: "examplePrefix",
  first: "exampleFirst",
  middle: "exampleMiddle",
  last: "exampleLast",
  greVerbal: "exampleGreVerbal",
  greVerbalPct: "exampleGreVerbalPct",
  greQuantitative: "exampleGreQuantitative",
  greQuantitativePct: "exampleGreQuantitativePct",
  greAnalyticalWriting: "exampleGreAnalyticalWriting",
  greAnalyticalWritingPct: "exampleGreAnalyticalWritingPct",
  id: "exampleId",
};

const service = {
  createMhciSlateGre() {
    return CREATE_RESULT;
  },
  mhciSlateGres: () => FIND_MANY_RESULT,
  mhciSlateGre: ({ where }: { where: { id: string } }) => {
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

describe("MhciSlateGre", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MhciSlateGreService,
          useValue: service,
        },
      ],
      controllers: [MhciSlateGreController],
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

  test("POST /mhciSlateGres", async () => {
    await request(app.getHttpServer())
      .post("/mhciSlateGres")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mhciSlateGres", async () => {
    await request(app.getHttpServer())
      .get("/mhciSlateGres")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mhciSlateGres/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciSlateGres"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mhciSlateGres/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciSlateGres"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mhciSlateGres existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mhciSlateGres")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mhciSlateGres")
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
