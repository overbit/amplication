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
import { RecommenderInfoController } from "../recommenderInfo.controller";
import { RecommenderInfoService } from "../recommenderInfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  affiliation: "exampleAffiliation",
  id: 42,
  phone: "examplePhone",
  recUserId: 42,
  relationshipToApplicant: "exampleRelationshipToApplicant",
  title: "exampleTitle",
};
const CREATE_RESULT = {
  affiliation: "exampleAffiliation",
  id: 42,
  phone: "examplePhone",
  recUserId: 42,
  relationshipToApplicant: "exampleRelationshipToApplicant",
  title: "exampleTitle",
};
const FIND_MANY_RESULT = [
  {
    affiliation: "exampleAffiliation",
    id: 42,
    phone: "examplePhone",
    recUserId: 42,
    relationshipToApplicant: "exampleRelationshipToApplicant",
    title: "exampleTitle",
  },
];
const FIND_ONE_RESULT = {
  affiliation: "exampleAffiliation",
  id: 42,
  phone: "examplePhone",
  recUserId: 42,
  relationshipToApplicant: "exampleRelationshipToApplicant",
  title: "exampleTitle",
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

describe("RecommenderInfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RecommenderInfoService,
          useValue: service,
        },
      ],
      controllers: [RecommenderInfoController],
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

  test("POST /recommenderInfos", async () => {
    await request(app.getHttpServer())
      .post("/recommenderInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /recommenderInfos", async () => {
    await request(app.getHttpServer())
      .get("/recommenderInfos")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /recommenderInfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/recommenderInfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /recommenderInfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/recommenderInfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /recommenderInfos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/recommenderInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/recommenderInfos")
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
