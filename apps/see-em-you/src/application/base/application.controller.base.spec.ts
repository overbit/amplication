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
import { ApplicationController } from "../application.controller";
import { ApplicationService } from "../application.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  area1: "exampleArea1",
  area2: "exampleArea2",
  area3: "exampleArea3",
  buckleywaive: "true",
  cnbc: 42,
  complete: "true",
  createdDate: new Date(),
  crossDeptProgs: "exampleCrossDeptProgs",
  crossDeptProgsOther: "exampleCrossDeptProgsOther",
  cups: "true",
  curEnrolled: "exampleCurEnrolled",
  hide: "true",
  honors: "exampleHonors",
  id: 42,
  invitationEmailSent: "exampleInvitationEmailSent",
  mastersReviewWaiver: "true",
  name: "exampleName",
  notificationsent: new Date(),
  otherInst: "exampleOtherInst",
  paid: "true",
  paymentamount: 42.424242424,
  paymentdate: new Date(),
  paymenttype: 42,
  pier: "true",
  portfolioLink: "examplePortfolioLink",
  portfolioPassword: "examplePortfolioPassword",
  portfoliosubmitted: "true",
  previousCoursework: 42,
  recordsPermission: "exampleRecordsPermission",
  recruitingEvent: "exampleRecruitingEvent",
  referralToProgram: "exampleReferralToProgram",
  rejectionSent: "exampleRejectionSent",
  round2: "exampleRound2",
  round3: "exampleRound3",
  sentToProgram: "exampleSentToProgram",
  statementofpurpose: "exampleStatementofpurpose",
  studentCommit: "true",
  submitted: "true",
  submittedDate: new Date(),
  userId: 42,
  waitlistSent: "exampleWaitlistSent",
  waive: "true",
  waivedate: new Date(),
  waiveHigherFee: 42,
  waiveToefl: 42,
  womenfellowship: "true",
};
const CREATE_RESULT = {
  area1: "exampleArea1",
  area2: "exampleArea2",
  area3: "exampleArea3",
  buckleywaive: "true",
  cnbc: 42,
  complete: "true",
  createdDate: new Date(),
  crossDeptProgs: "exampleCrossDeptProgs",
  crossDeptProgsOther: "exampleCrossDeptProgsOther",
  cups: "true",
  curEnrolled: "exampleCurEnrolled",
  hide: "true",
  honors: "exampleHonors",
  id: 42,
  invitationEmailSent: "exampleInvitationEmailSent",
  mastersReviewWaiver: "true",
  name: "exampleName",
  notificationsent: new Date(),
  otherInst: "exampleOtherInst",
  paid: "true",
  paymentamount: 42.424242424,
  paymentdate: new Date(),
  paymenttype: 42,
  pier: "true",
  portfolioLink: "examplePortfolioLink",
  portfolioPassword: "examplePortfolioPassword",
  portfoliosubmitted: "true",
  previousCoursework: 42,
  recordsPermission: "exampleRecordsPermission",
  recruitingEvent: "exampleRecruitingEvent",
  referralToProgram: "exampleReferralToProgram",
  rejectionSent: "exampleRejectionSent",
  round2: "exampleRound2",
  round3: "exampleRound3",
  sentToProgram: "exampleSentToProgram",
  statementofpurpose: "exampleStatementofpurpose",
  studentCommit: "true",
  submitted: "true",
  submittedDate: new Date(),
  userId: 42,
  waitlistSent: "exampleWaitlistSent",
  waive: "true",
  waivedate: new Date(),
  waiveHigherFee: 42,
  waiveToefl: 42,
  womenfellowship: "true",
};
const FIND_MANY_RESULT = [
  {
    area1: "exampleArea1",
    area2: "exampleArea2",
    area3: "exampleArea3",
    buckleywaive: "true",
    cnbc: 42,
    complete: "true",
    createdDate: new Date(),
    crossDeptProgs: "exampleCrossDeptProgs",
    crossDeptProgsOther: "exampleCrossDeptProgsOther",
    cups: "true",
    curEnrolled: "exampleCurEnrolled",
    hide: "true",
    honors: "exampleHonors",
    id: 42,
    invitationEmailSent: "exampleInvitationEmailSent",
    mastersReviewWaiver: "true",
    name: "exampleName",
    notificationsent: new Date(),
    otherInst: "exampleOtherInst",
    paid: "true",
    paymentamount: 42.424242424,
    paymentdate: new Date(),
    paymenttype: 42,
    pier: "true",
    portfolioLink: "examplePortfolioLink",
    portfolioPassword: "examplePortfolioPassword",
    portfoliosubmitted: "true",
    previousCoursework: 42,
    recordsPermission: "exampleRecordsPermission",
    recruitingEvent: "exampleRecruitingEvent",
    referralToProgram: "exampleReferralToProgram",
    rejectionSent: "exampleRejectionSent",
    round2: "exampleRound2",
    round3: "exampleRound3",
    sentToProgram: "exampleSentToProgram",
    statementofpurpose: "exampleStatementofpurpose",
    studentCommit: "true",
    submitted: "true",
    submittedDate: new Date(),
    userId: 42,
    waitlistSent: "exampleWaitlistSent",
    waive: "true",
    waivedate: new Date(),
    waiveHigherFee: 42,
    waiveToefl: 42,
    womenfellowship: "true",
  },
];
const FIND_ONE_RESULT = {
  area1: "exampleArea1",
  area2: "exampleArea2",
  area3: "exampleArea3",
  buckleywaive: "true",
  cnbc: 42,
  complete: "true",
  createdDate: new Date(),
  crossDeptProgs: "exampleCrossDeptProgs",
  crossDeptProgsOther: "exampleCrossDeptProgsOther",
  cups: "true",
  curEnrolled: "exampleCurEnrolled",
  hide: "true",
  honors: "exampleHonors",
  id: 42,
  invitationEmailSent: "exampleInvitationEmailSent",
  mastersReviewWaiver: "true",
  name: "exampleName",
  notificationsent: new Date(),
  otherInst: "exampleOtherInst",
  paid: "true",
  paymentamount: 42.424242424,
  paymentdate: new Date(),
  paymenttype: 42,
  pier: "true",
  portfolioLink: "examplePortfolioLink",
  portfolioPassword: "examplePortfolioPassword",
  portfoliosubmitted: "true",
  previousCoursework: 42,
  recordsPermission: "exampleRecordsPermission",
  recruitingEvent: "exampleRecruitingEvent",
  referralToProgram: "exampleReferralToProgram",
  rejectionSent: "exampleRejectionSent",
  round2: "exampleRound2",
  round3: "exampleRound3",
  sentToProgram: "exampleSentToProgram",
  statementofpurpose: "exampleStatementofpurpose",
  studentCommit: "true",
  submitted: "true",
  submittedDate: new Date(),
  userId: 42,
  waitlistSent: "exampleWaitlistSent",
  waive: "true",
  waivedate: new Date(),
  waiveHigherFee: 42,
  waiveToefl: 42,
  womenfellowship: "true",
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

describe("Application", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationService,
          useValue: service,
        },
      ],
      controllers: [ApplicationController],
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

  test("POST /applications", async () => {
    await request(app.getHttpServer())
      .post("/applications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
        notificationsent: CREATE_RESULT.notificationsent.toISOString(),
        paymentdate: CREATE_RESULT.paymentdate.toISOString(),
        submittedDate: CREATE_RESULT.submittedDate.toISOString(),
        waivedate: CREATE_RESULT.waivedate.toISOString(),
      });
  });

  test("GET /applications", async () => {
    await request(app.getHttpServer())
      .get("/applications")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdDate: FIND_MANY_RESULT[0].createdDate.toISOString(),
          notificationsent: FIND_MANY_RESULT[0].notificationsent.toISOString(),
          paymentdate: FIND_MANY_RESULT[0].paymentdate.toISOString(),
          submittedDate: FIND_MANY_RESULT[0].submittedDate.toISOString(),
          waivedate: FIND_MANY_RESULT[0].waivedate.toISOString(),
        },
      ]);
  });

  test("GET /applications/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applications"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applications/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applications"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdDate: FIND_ONE_RESULT.createdDate.toISOString(),
        notificationsent: FIND_ONE_RESULT.notificationsent.toISOString(),
        paymentdate: FIND_ONE_RESULT.paymentdate.toISOString(),
        submittedDate: FIND_ONE_RESULT.submittedDate.toISOString(),
        waivedate: FIND_ONE_RESULT.waivedate.toISOString(),
      });
  });

  test("POST /applications existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
        notificationsent: CREATE_RESULT.notificationsent.toISOString(),
        paymentdate: CREATE_RESULT.paymentdate.toISOString(),
        submittedDate: CREATE_RESULT.submittedDate.toISOString(),
        waivedate: CREATE_RESULT.waivedate.toISOString(),
      })
      .then(function () {
        agent
          .post("/applications")
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
