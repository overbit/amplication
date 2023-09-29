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
import { MhciSlatePubController } from "../mhciSlatePub.controller";
import { MhciSlatePubService } from "../mhciSlatePub.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  authorsPub1: "exampleAuthorsPub1",
  authorsPub2: "exampleAuthorsPub2",
  authorsPub3: "exampleAuthorsPub3",
  authorsPub4: "exampleAuthorsPub4",
  authorsPub5: "exampleAuthorsPub5",
  authorsPub6: "exampleAuthorsPub6",
  citationPub1: "exampleCitationPub1",
  citationPub2: "exampleCitationPub2",
  citationPub3: "exampleCitationPub3",
  citationPub4: "exampleCitationPub4",
  citationPub5: "exampleCitationPub5",
  citationPub6: "exampleCitationPub6",
  destinationPub1: "exampleDestinationPub1",
  destinationPub2: "exampleDestinationPub2",
  destinationPub3: "exampleDestinationPub3",
  destinationPub4: "exampleDestinationPub4",
  destinationPub5: "exampleDestinationPub5",
  destinationPub6: "exampleDestinationPub6",
  first: "exampleFirst",
  hasPublications: "exampleHasPublications",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  otherTypeOfPublication1: "exampleOtherTypeOfPublication1",
  otherTypeOfPublication2: "exampleOtherTypeOfPublication2",
  otherTypeOfPublication3: "exampleOtherTypeOfPublication3",
  otherTypeOfPublication4: "exampleOtherTypeOfPublication4",
  otherTypeOfPublication5: "exampleOtherTypeOfPublication5",
  otherTypeOfPublication6: "exampleOtherTypeOfPublication6",
  prefix: "examplePrefix",
  statusOfPublication1: "exampleStatusOfPublication1",
  statusOfPublication2: "exampleStatusOfPublication2",
  statusOfPublication3: "exampleStatusOfPublication3",
  statusOfPublication4: "exampleStatusOfPublication4",
  statusOfPublication5: "exampleStatusOfPublication5",
  statusOfPublication6: "exampleStatusOfPublication6",
  titlePub1: "exampleTitlePub1",
  titlePub2: "exampleTitlePub2",
  titlePub3: "exampleTitlePub3",
  titlePub4: "exampleTitlePub4",
  titlePub5: "exampleTitlePub5",
  titlePub6: "exampleTitlePub6",
  typeOfPublication1: "exampleTypeOfPublication1",
  typeOfPublication2: "exampleTypeOfPublication2",
  typeOfPublication3: "exampleTypeOfPublication3",
  typeOfPublication4: "exampleTypeOfPublication4",
  typeOfPublication5: "exampleTypeOfPublication5",
  typeOfPublication6: "exampleTypeOfPublication6",
  urlPub1: "exampleUrlPub1",
  urlPub2: "exampleUrlPub2",
  urlPub3: "exampleUrlPub3",
  urlPub4: "exampleUrlPub4",
  urlPub5: "exampleUrlPub5",
  urlPub6: "exampleUrlPub6",
};
const CREATE_RESULT = {
  authorsPub1: "exampleAuthorsPub1",
  authorsPub2: "exampleAuthorsPub2",
  authorsPub3: "exampleAuthorsPub3",
  authorsPub4: "exampleAuthorsPub4",
  authorsPub5: "exampleAuthorsPub5",
  authorsPub6: "exampleAuthorsPub6",
  citationPub1: "exampleCitationPub1",
  citationPub2: "exampleCitationPub2",
  citationPub3: "exampleCitationPub3",
  citationPub4: "exampleCitationPub4",
  citationPub5: "exampleCitationPub5",
  citationPub6: "exampleCitationPub6",
  destinationPub1: "exampleDestinationPub1",
  destinationPub2: "exampleDestinationPub2",
  destinationPub3: "exampleDestinationPub3",
  destinationPub4: "exampleDestinationPub4",
  destinationPub5: "exampleDestinationPub5",
  destinationPub6: "exampleDestinationPub6",
  first: "exampleFirst",
  hasPublications: "exampleHasPublications",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  otherTypeOfPublication1: "exampleOtherTypeOfPublication1",
  otherTypeOfPublication2: "exampleOtherTypeOfPublication2",
  otherTypeOfPublication3: "exampleOtherTypeOfPublication3",
  otherTypeOfPublication4: "exampleOtherTypeOfPublication4",
  otherTypeOfPublication5: "exampleOtherTypeOfPublication5",
  otherTypeOfPublication6: "exampleOtherTypeOfPublication6",
  prefix: "examplePrefix",
  statusOfPublication1: "exampleStatusOfPublication1",
  statusOfPublication2: "exampleStatusOfPublication2",
  statusOfPublication3: "exampleStatusOfPublication3",
  statusOfPublication4: "exampleStatusOfPublication4",
  statusOfPublication5: "exampleStatusOfPublication5",
  statusOfPublication6: "exampleStatusOfPublication6",
  titlePub1: "exampleTitlePub1",
  titlePub2: "exampleTitlePub2",
  titlePub3: "exampleTitlePub3",
  titlePub4: "exampleTitlePub4",
  titlePub5: "exampleTitlePub5",
  titlePub6: "exampleTitlePub6",
  typeOfPublication1: "exampleTypeOfPublication1",
  typeOfPublication2: "exampleTypeOfPublication2",
  typeOfPublication3: "exampleTypeOfPublication3",
  typeOfPublication4: "exampleTypeOfPublication4",
  typeOfPublication5: "exampleTypeOfPublication5",
  typeOfPublication6: "exampleTypeOfPublication6",
  urlPub1: "exampleUrlPub1",
  urlPub2: "exampleUrlPub2",
  urlPub3: "exampleUrlPub3",
  urlPub4: "exampleUrlPub4",
  urlPub5: "exampleUrlPub5",
  urlPub6: "exampleUrlPub6",
};
const FIND_MANY_RESULT = [
  {
    authorsPub1: "exampleAuthorsPub1",
    authorsPub2: "exampleAuthorsPub2",
    authorsPub3: "exampleAuthorsPub3",
    authorsPub4: "exampleAuthorsPub4",
    authorsPub5: "exampleAuthorsPub5",
    authorsPub6: "exampleAuthorsPub6",
    citationPub1: "exampleCitationPub1",
    citationPub2: "exampleCitationPub2",
    citationPub3: "exampleCitationPub3",
    citationPub4: "exampleCitationPub4",
    citationPub5: "exampleCitationPub5",
    citationPub6: "exampleCitationPub6",
    destinationPub1: "exampleDestinationPub1",
    destinationPub2: "exampleDestinationPub2",
    destinationPub3: "exampleDestinationPub3",
    destinationPub4: "exampleDestinationPub4",
    destinationPub5: "exampleDestinationPub5",
    destinationPub6: "exampleDestinationPub6",
    first: "exampleFirst",
    hasPublications: "exampleHasPublications",
    id: "exampleId",
    last: "exampleLast",
    middle: "exampleMiddle",
    otherTypeOfPublication1: "exampleOtherTypeOfPublication1",
    otherTypeOfPublication2: "exampleOtherTypeOfPublication2",
    otherTypeOfPublication3: "exampleOtherTypeOfPublication3",
    otherTypeOfPublication4: "exampleOtherTypeOfPublication4",
    otherTypeOfPublication5: "exampleOtherTypeOfPublication5",
    otherTypeOfPublication6: "exampleOtherTypeOfPublication6",
    prefix: "examplePrefix",
    statusOfPublication1: "exampleStatusOfPublication1",
    statusOfPublication2: "exampleStatusOfPublication2",
    statusOfPublication3: "exampleStatusOfPublication3",
    statusOfPublication4: "exampleStatusOfPublication4",
    statusOfPublication5: "exampleStatusOfPublication5",
    statusOfPublication6: "exampleStatusOfPublication6",
    titlePub1: "exampleTitlePub1",
    titlePub2: "exampleTitlePub2",
    titlePub3: "exampleTitlePub3",
    titlePub4: "exampleTitlePub4",
    titlePub5: "exampleTitlePub5",
    titlePub6: "exampleTitlePub6",
    typeOfPublication1: "exampleTypeOfPublication1",
    typeOfPublication2: "exampleTypeOfPublication2",
    typeOfPublication3: "exampleTypeOfPublication3",
    typeOfPublication4: "exampleTypeOfPublication4",
    typeOfPublication5: "exampleTypeOfPublication5",
    typeOfPublication6: "exampleTypeOfPublication6",
    urlPub1: "exampleUrlPub1",
    urlPub2: "exampleUrlPub2",
    urlPub3: "exampleUrlPub3",
    urlPub4: "exampleUrlPub4",
    urlPub5: "exampleUrlPub5",
    urlPub6: "exampleUrlPub6",
  },
];
const FIND_ONE_RESULT = {
  authorsPub1: "exampleAuthorsPub1",
  authorsPub2: "exampleAuthorsPub2",
  authorsPub3: "exampleAuthorsPub3",
  authorsPub4: "exampleAuthorsPub4",
  authorsPub5: "exampleAuthorsPub5",
  authorsPub6: "exampleAuthorsPub6",
  citationPub1: "exampleCitationPub1",
  citationPub2: "exampleCitationPub2",
  citationPub3: "exampleCitationPub3",
  citationPub4: "exampleCitationPub4",
  citationPub5: "exampleCitationPub5",
  citationPub6: "exampleCitationPub6",
  destinationPub1: "exampleDestinationPub1",
  destinationPub2: "exampleDestinationPub2",
  destinationPub3: "exampleDestinationPub3",
  destinationPub4: "exampleDestinationPub4",
  destinationPub5: "exampleDestinationPub5",
  destinationPub6: "exampleDestinationPub6",
  first: "exampleFirst",
  hasPublications: "exampleHasPublications",
  id: "exampleId",
  last: "exampleLast",
  middle: "exampleMiddle",
  otherTypeOfPublication1: "exampleOtherTypeOfPublication1",
  otherTypeOfPublication2: "exampleOtherTypeOfPublication2",
  otherTypeOfPublication3: "exampleOtherTypeOfPublication3",
  otherTypeOfPublication4: "exampleOtherTypeOfPublication4",
  otherTypeOfPublication5: "exampleOtherTypeOfPublication5",
  otherTypeOfPublication6: "exampleOtherTypeOfPublication6",
  prefix: "examplePrefix",
  statusOfPublication1: "exampleStatusOfPublication1",
  statusOfPublication2: "exampleStatusOfPublication2",
  statusOfPublication3: "exampleStatusOfPublication3",
  statusOfPublication4: "exampleStatusOfPublication4",
  statusOfPublication5: "exampleStatusOfPublication5",
  statusOfPublication6: "exampleStatusOfPublication6",
  titlePub1: "exampleTitlePub1",
  titlePub2: "exampleTitlePub2",
  titlePub3: "exampleTitlePub3",
  titlePub4: "exampleTitlePub4",
  titlePub5: "exampleTitlePub5",
  titlePub6: "exampleTitlePub6",
  typeOfPublication1: "exampleTypeOfPublication1",
  typeOfPublication2: "exampleTypeOfPublication2",
  typeOfPublication3: "exampleTypeOfPublication3",
  typeOfPublication4: "exampleTypeOfPublication4",
  typeOfPublication5: "exampleTypeOfPublication5",
  typeOfPublication6: "exampleTypeOfPublication6",
  urlPub1: "exampleUrlPub1",
  urlPub2: "exampleUrlPub2",
  urlPub3: "exampleUrlPub3",
  urlPub4: "exampleUrlPub4",
  urlPub5: "exampleUrlPub5",
  urlPub6: "exampleUrlPub6",
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

describe("MhciSlatePub", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MhciSlatePubService,
          useValue: service,
        },
      ],
      controllers: [MhciSlatePubController],
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

  test("POST /mhciSlatePubs", async () => {
    await request(app.getHttpServer())
      .post("/mhciSlatePubs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /mhciSlatePubs", async () => {
    await request(app.getHttpServer())
      .get("/mhciSlatePubs")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /mhciSlatePubs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciSlatePubs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mhciSlatePubs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mhciSlatePubs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /mhciSlatePubs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mhciSlatePubs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/mhciSlatePubs")
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
