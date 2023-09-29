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
import { SlateSuppinfoController } from "../slateSuppinfo.controller";
import { SlateSuppinfoService } from "../slateSuppinfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  fellowship10Amount: "exampleFellowship10Amount",
  fellowship10AppliedDate: "exampleFellowship10AppliedDate",
  fellowship10AwardedDate: "exampleFellowship10AwardedDate",
  fellowship10Duration: "exampleFellowship10Duration",
  fellowship10Name: "exampleFellowship10Name",
  fellowship10Status: "exampleFellowship10Status",
  fellowship1Amount: "exampleFellowship1Amount",
  fellowship1AppliedDate: "exampleFellowship1AppliedDate",
  fellowship1AwardedDate: "exampleFellowship1AwardedDate",
  fellowship1Duration: "exampleFellowship1Duration",
  fellowship1Name: "exampleFellowship1Name",
  fellowship1Status: "exampleFellowship1Status",
  fellowship2Amount: "exampleFellowship2Amount",
  fellowship2AppliedDate: "exampleFellowship2AppliedDate",
  fellowship2AwardedDate: "exampleFellowship2AwardedDate",
  fellowship2Duration: "exampleFellowship2Duration",
  fellowship2Name: "exampleFellowship2Name",
  fellowship2Status: "exampleFellowship2Status",
  fellowship3Amount: "exampleFellowship3Amount",
  fellowship3AppliedDate: "exampleFellowship3AppliedDate",
  fellowship3AwardedDate: "exampleFellowship3AwardedDate",
  fellowship3Duration: "exampleFellowship3Duration",
  fellowship3Name: "exampleFellowship3Name",
  fellowship3Status: "exampleFellowship3Status",
  fellowship4Amount: "exampleFellowship4Amount",
  fellowship4AppliedDate: "exampleFellowship4AppliedDate",
  fellowship4AwardedDate: "exampleFellowship4AwardedDate",
  fellowship4Duration: "exampleFellowship4Duration",
  fellowship4Name: "exampleFellowship4Name",
  fellowship4Status: "exampleFellowship4Status",
  fellowship5Amount: "exampleFellowship5Amount",
  fellowship5AppliedDate: "exampleFellowship5AppliedDate",
  fellowship5AwardedDate: "exampleFellowship5AwardedDate",
  fellowship5Duration: "exampleFellowship5Duration",
  fellowship5Name: "exampleFellowship5Name",
  fellowship5Status: "exampleFellowship5Status",
  fellowship6Amount: "exampleFellowship6Amount",
  fellowship6AppliedDate: "exampleFellowship6AppliedDate",
  fellowship6AwardedDate: "exampleFellowship6AwardedDate",
  fellowship6Duration: "exampleFellowship6Duration",
  fellowship6Name: "exampleFellowship6Name",
  fellowship6Status: "exampleFellowship6Status",
  fellowship7Amount: "exampleFellowship7Amount",
  fellowship7AppliedDate: "exampleFellowship7AppliedDate",
  fellowship7AwardedDate: "exampleFellowship7AwardedDate",
  fellowship7Duration: "exampleFellowship7Duration",
  fellowship7Name: "exampleFellowship7Name",
  fellowship7Status: "exampleFellowship7Status",
  fellowship8Amount: "exampleFellowship8Amount",
  fellowship8AppliedDate: "exampleFellowship8AppliedDate",
  fellowship8AwardedDate: "exampleFellowship8AwardedDate",
  fellowship8Duration: "exampleFellowship8Duration",
  fellowship8Name: "exampleFellowship8Name",
  fellowship8Status: "exampleFellowship8Status",
  fellowship9Amount: "exampleFellowship9Amount",
  fellowship9AppliedDate: "exampleFellowship9AppliedDate",
  fellowship9AwardedDate: "exampleFellowship9AwardedDate",
  fellowship9Duration: "exampleFellowship9Duration",
  fellowship9Name: "exampleFellowship9Name",
  fellowship9Status: "exampleFellowship9Status",
  first: "exampleFirst",
  hasFellowships: "exampleHasFellowships",
  id: "exampleId",
  last: "exampleLast",
  learnAboutOther: "exampleLearnAboutOther",
  learnAboutUs: "exampleLearnAboutUs",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  videoEssayAccessCode: "exampleVideoEssayAccessCode",
  videoEssayUrl: "exampleVideoEssayUrl",
};
const CREATE_RESULT = {
  fellowship10Amount: "exampleFellowship10Amount",
  fellowship10AppliedDate: "exampleFellowship10AppliedDate",
  fellowship10AwardedDate: "exampleFellowship10AwardedDate",
  fellowship10Duration: "exampleFellowship10Duration",
  fellowship10Name: "exampleFellowship10Name",
  fellowship10Status: "exampleFellowship10Status",
  fellowship1Amount: "exampleFellowship1Amount",
  fellowship1AppliedDate: "exampleFellowship1AppliedDate",
  fellowship1AwardedDate: "exampleFellowship1AwardedDate",
  fellowship1Duration: "exampleFellowship1Duration",
  fellowship1Name: "exampleFellowship1Name",
  fellowship1Status: "exampleFellowship1Status",
  fellowship2Amount: "exampleFellowship2Amount",
  fellowship2AppliedDate: "exampleFellowship2AppliedDate",
  fellowship2AwardedDate: "exampleFellowship2AwardedDate",
  fellowship2Duration: "exampleFellowship2Duration",
  fellowship2Name: "exampleFellowship2Name",
  fellowship2Status: "exampleFellowship2Status",
  fellowship3Amount: "exampleFellowship3Amount",
  fellowship3AppliedDate: "exampleFellowship3AppliedDate",
  fellowship3AwardedDate: "exampleFellowship3AwardedDate",
  fellowship3Duration: "exampleFellowship3Duration",
  fellowship3Name: "exampleFellowship3Name",
  fellowship3Status: "exampleFellowship3Status",
  fellowship4Amount: "exampleFellowship4Amount",
  fellowship4AppliedDate: "exampleFellowship4AppliedDate",
  fellowship4AwardedDate: "exampleFellowship4AwardedDate",
  fellowship4Duration: "exampleFellowship4Duration",
  fellowship4Name: "exampleFellowship4Name",
  fellowship4Status: "exampleFellowship4Status",
  fellowship5Amount: "exampleFellowship5Amount",
  fellowship5AppliedDate: "exampleFellowship5AppliedDate",
  fellowship5AwardedDate: "exampleFellowship5AwardedDate",
  fellowship5Duration: "exampleFellowship5Duration",
  fellowship5Name: "exampleFellowship5Name",
  fellowship5Status: "exampleFellowship5Status",
  fellowship6Amount: "exampleFellowship6Amount",
  fellowship6AppliedDate: "exampleFellowship6AppliedDate",
  fellowship6AwardedDate: "exampleFellowship6AwardedDate",
  fellowship6Duration: "exampleFellowship6Duration",
  fellowship6Name: "exampleFellowship6Name",
  fellowship6Status: "exampleFellowship6Status",
  fellowship7Amount: "exampleFellowship7Amount",
  fellowship7AppliedDate: "exampleFellowship7AppliedDate",
  fellowship7AwardedDate: "exampleFellowship7AwardedDate",
  fellowship7Duration: "exampleFellowship7Duration",
  fellowship7Name: "exampleFellowship7Name",
  fellowship7Status: "exampleFellowship7Status",
  fellowship8Amount: "exampleFellowship8Amount",
  fellowship8AppliedDate: "exampleFellowship8AppliedDate",
  fellowship8AwardedDate: "exampleFellowship8AwardedDate",
  fellowship8Duration: "exampleFellowship8Duration",
  fellowship8Name: "exampleFellowship8Name",
  fellowship8Status: "exampleFellowship8Status",
  fellowship9Amount: "exampleFellowship9Amount",
  fellowship9AppliedDate: "exampleFellowship9AppliedDate",
  fellowship9AwardedDate: "exampleFellowship9AwardedDate",
  fellowship9Duration: "exampleFellowship9Duration",
  fellowship9Name: "exampleFellowship9Name",
  fellowship9Status: "exampleFellowship9Status",
  first: "exampleFirst",
  hasFellowships: "exampleHasFellowships",
  id: "exampleId",
  last: "exampleLast",
  learnAboutOther: "exampleLearnAboutOther",
  learnAboutUs: "exampleLearnAboutUs",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  videoEssayAccessCode: "exampleVideoEssayAccessCode",
  videoEssayUrl: "exampleVideoEssayUrl",
};
const FIND_MANY_RESULT = [
  {
    fellowship10Amount: "exampleFellowship10Amount",
    fellowship10AppliedDate: "exampleFellowship10AppliedDate",
    fellowship10AwardedDate: "exampleFellowship10AwardedDate",
    fellowship10Duration: "exampleFellowship10Duration",
    fellowship10Name: "exampleFellowship10Name",
    fellowship10Status: "exampleFellowship10Status",
    fellowship1Amount: "exampleFellowship1Amount",
    fellowship1AppliedDate: "exampleFellowship1AppliedDate",
    fellowship1AwardedDate: "exampleFellowship1AwardedDate",
    fellowship1Duration: "exampleFellowship1Duration",
    fellowship1Name: "exampleFellowship1Name",
    fellowship1Status: "exampleFellowship1Status",
    fellowship2Amount: "exampleFellowship2Amount",
    fellowship2AppliedDate: "exampleFellowship2AppliedDate",
    fellowship2AwardedDate: "exampleFellowship2AwardedDate",
    fellowship2Duration: "exampleFellowship2Duration",
    fellowship2Name: "exampleFellowship2Name",
    fellowship2Status: "exampleFellowship2Status",
    fellowship3Amount: "exampleFellowship3Amount",
    fellowship3AppliedDate: "exampleFellowship3AppliedDate",
    fellowship3AwardedDate: "exampleFellowship3AwardedDate",
    fellowship3Duration: "exampleFellowship3Duration",
    fellowship3Name: "exampleFellowship3Name",
    fellowship3Status: "exampleFellowship3Status",
    fellowship4Amount: "exampleFellowship4Amount",
    fellowship4AppliedDate: "exampleFellowship4AppliedDate",
    fellowship4AwardedDate: "exampleFellowship4AwardedDate",
    fellowship4Duration: "exampleFellowship4Duration",
    fellowship4Name: "exampleFellowship4Name",
    fellowship4Status: "exampleFellowship4Status",
    fellowship5Amount: "exampleFellowship5Amount",
    fellowship5AppliedDate: "exampleFellowship5AppliedDate",
    fellowship5AwardedDate: "exampleFellowship5AwardedDate",
    fellowship5Duration: "exampleFellowship5Duration",
    fellowship5Name: "exampleFellowship5Name",
    fellowship5Status: "exampleFellowship5Status",
    fellowship6Amount: "exampleFellowship6Amount",
    fellowship6AppliedDate: "exampleFellowship6AppliedDate",
    fellowship6AwardedDate: "exampleFellowship6AwardedDate",
    fellowship6Duration: "exampleFellowship6Duration",
    fellowship6Name: "exampleFellowship6Name",
    fellowship6Status: "exampleFellowship6Status",
    fellowship7Amount: "exampleFellowship7Amount",
    fellowship7AppliedDate: "exampleFellowship7AppliedDate",
    fellowship7AwardedDate: "exampleFellowship7AwardedDate",
    fellowship7Duration: "exampleFellowship7Duration",
    fellowship7Name: "exampleFellowship7Name",
    fellowship7Status: "exampleFellowship7Status",
    fellowship8Amount: "exampleFellowship8Amount",
    fellowship8AppliedDate: "exampleFellowship8AppliedDate",
    fellowship8AwardedDate: "exampleFellowship8AwardedDate",
    fellowship8Duration: "exampleFellowship8Duration",
    fellowship8Name: "exampleFellowship8Name",
    fellowship8Status: "exampleFellowship8Status",
    fellowship9Amount: "exampleFellowship9Amount",
    fellowship9AppliedDate: "exampleFellowship9AppliedDate",
    fellowship9AwardedDate: "exampleFellowship9AwardedDate",
    fellowship9Duration: "exampleFellowship9Duration",
    fellowship9Name: "exampleFellowship9Name",
    fellowship9Status: "exampleFellowship9Status",
    first: "exampleFirst",
    hasFellowships: "exampleHasFellowships",
    id: "exampleId",
    last: "exampleLast",
    learnAboutOther: "exampleLearnAboutOther",
    learnAboutUs: "exampleLearnAboutUs",
    middle: "exampleMiddle",
    prefix: "examplePrefix",
    videoEssayAccessCode: "exampleVideoEssayAccessCode",
    videoEssayUrl: "exampleVideoEssayUrl",
  },
];
const FIND_ONE_RESULT = {
  fellowship10Amount: "exampleFellowship10Amount",
  fellowship10AppliedDate: "exampleFellowship10AppliedDate",
  fellowship10AwardedDate: "exampleFellowship10AwardedDate",
  fellowship10Duration: "exampleFellowship10Duration",
  fellowship10Name: "exampleFellowship10Name",
  fellowship10Status: "exampleFellowship10Status",
  fellowship1Amount: "exampleFellowship1Amount",
  fellowship1AppliedDate: "exampleFellowship1AppliedDate",
  fellowship1AwardedDate: "exampleFellowship1AwardedDate",
  fellowship1Duration: "exampleFellowship1Duration",
  fellowship1Name: "exampleFellowship1Name",
  fellowship1Status: "exampleFellowship1Status",
  fellowship2Amount: "exampleFellowship2Amount",
  fellowship2AppliedDate: "exampleFellowship2AppliedDate",
  fellowship2AwardedDate: "exampleFellowship2AwardedDate",
  fellowship2Duration: "exampleFellowship2Duration",
  fellowship2Name: "exampleFellowship2Name",
  fellowship2Status: "exampleFellowship2Status",
  fellowship3Amount: "exampleFellowship3Amount",
  fellowship3AppliedDate: "exampleFellowship3AppliedDate",
  fellowship3AwardedDate: "exampleFellowship3AwardedDate",
  fellowship3Duration: "exampleFellowship3Duration",
  fellowship3Name: "exampleFellowship3Name",
  fellowship3Status: "exampleFellowship3Status",
  fellowship4Amount: "exampleFellowship4Amount",
  fellowship4AppliedDate: "exampleFellowship4AppliedDate",
  fellowship4AwardedDate: "exampleFellowship4AwardedDate",
  fellowship4Duration: "exampleFellowship4Duration",
  fellowship4Name: "exampleFellowship4Name",
  fellowship4Status: "exampleFellowship4Status",
  fellowship5Amount: "exampleFellowship5Amount",
  fellowship5AppliedDate: "exampleFellowship5AppliedDate",
  fellowship5AwardedDate: "exampleFellowship5AwardedDate",
  fellowship5Duration: "exampleFellowship5Duration",
  fellowship5Name: "exampleFellowship5Name",
  fellowship5Status: "exampleFellowship5Status",
  fellowship6Amount: "exampleFellowship6Amount",
  fellowship6AppliedDate: "exampleFellowship6AppliedDate",
  fellowship6AwardedDate: "exampleFellowship6AwardedDate",
  fellowship6Duration: "exampleFellowship6Duration",
  fellowship6Name: "exampleFellowship6Name",
  fellowship6Status: "exampleFellowship6Status",
  fellowship7Amount: "exampleFellowship7Amount",
  fellowship7AppliedDate: "exampleFellowship7AppliedDate",
  fellowship7AwardedDate: "exampleFellowship7AwardedDate",
  fellowship7Duration: "exampleFellowship7Duration",
  fellowship7Name: "exampleFellowship7Name",
  fellowship7Status: "exampleFellowship7Status",
  fellowship8Amount: "exampleFellowship8Amount",
  fellowship8AppliedDate: "exampleFellowship8AppliedDate",
  fellowship8AwardedDate: "exampleFellowship8AwardedDate",
  fellowship8Duration: "exampleFellowship8Duration",
  fellowship8Name: "exampleFellowship8Name",
  fellowship8Status: "exampleFellowship8Status",
  fellowship9Amount: "exampleFellowship9Amount",
  fellowship9AppliedDate: "exampleFellowship9AppliedDate",
  fellowship9AwardedDate: "exampleFellowship9AwardedDate",
  fellowship9Duration: "exampleFellowship9Duration",
  fellowship9Name: "exampleFellowship9Name",
  fellowship9Status: "exampleFellowship9Status",
  first: "exampleFirst",
  hasFellowships: "exampleHasFellowships",
  id: "exampleId",
  last: "exampleLast",
  learnAboutOther: "exampleLearnAboutOther",
  learnAboutUs: "exampleLearnAboutUs",
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  videoEssayAccessCode: "exampleVideoEssayAccessCode",
  videoEssayUrl: "exampleVideoEssayUrl",
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

describe("SlateSuppinfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateSuppinfoService,
          useValue: service,
        },
      ],
      controllers: [SlateSuppinfoController],
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

  test("POST /slateSuppinfos", async () => {
    await request(app.getHttpServer())
      .post("/slateSuppinfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateSuppinfos", async () => {
    await request(app.getHttpServer())
      .get("/slateSuppinfos")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateSuppinfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateSuppinfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateSuppinfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateSuppinfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateSuppinfos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateSuppinfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateSuppinfos")
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
