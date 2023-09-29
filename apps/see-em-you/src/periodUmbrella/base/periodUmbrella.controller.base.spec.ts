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
import { PeriodUmbrellaController } from "../periodUmbrella.controller";
import { PeriodUmbrellaService } from "../periodUmbrella.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  admissionTerm: "exampleAdmissionTerm",
  admissionYear: 42,
  higherFeeDate: new Date(),
  id: 42,
  lastPaymentDate: new Date(),
  umbrellaName: "exampleUmbrellaName",
};
const CREATE_RESULT = {
  admissionTerm: "exampleAdmissionTerm",
  admissionYear: 42,
  higherFeeDate: new Date(),
  id: 42,
  lastPaymentDate: new Date(),
  umbrellaName: "exampleUmbrellaName",
};
const FIND_MANY_RESULT = [
  {
    admissionTerm: "exampleAdmissionTerm",
    admissionYear: 42,
    higherFeeDate: new Date(),
    id: 42,
    lastPaymentDate: new Date(),
    umbrellaName: "exampleUmbrellaName",
  },
];
const FIND_ONE_RESULT = {
  admissionTerm: "exampleAdmissionTerm",
  admissionYear: 42,
  higherFeeDate: new Date(),
  id: 42,
  lastPaymentDate: new Date(),
  umbrellaName: "exampleUmbrellaName",
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

describe("PeriodUmbrella", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PeriodUmbrellaService,
          useValue: service,
        },
      ],
      controllers: [PeriodUmbrellaController],
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

  test("POST /periodUmbrellas", async () => {
    await request(app.getHttpServer())
      .post("/periodUmbrellas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        higherFeeDate: CREATE_RESULT.higherFeeDate.toISOString(),
        lastPaymentDate: CREATE_RESULT.lastPaymentDate.toISOString(),
      });
  });

  test("GET /periodUmbrellas", async () => {
    await request(app.getHttpServer())
      .get("/periodUmbrellas")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          higherFeeDate: FIND_MANY_RESULT[0].higherFeeDate.toISOString(),
          lastPaymentDate: FIND_MANY_RESULT[0].lastPaymentDate.toISOString(),
        },
      ]);
  });

  test("GET /periodUmbrellas/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/periodUmbrellas"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /periodUmbrellas/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/periodUmbrellas"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        higherFeeDate: FIND_ONE_RESULT.higherFeeDate.toISOString(),
        lastPaymentDate: FIND_ONE_RESULT.lastPaymentDate.toISOString(),
      });
  });

  test("POST /periodUmbrellas existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/periodUmbrellas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        higherFeeDate: CREATE_RESULT.higherFeeDate.toISOString(),
        lastPaymentDate: CREATE_RESULT.lastPaymentDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/periodUmbrellas")
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
