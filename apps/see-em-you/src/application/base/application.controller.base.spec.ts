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
import { ApplicationController } from "../application.controller";
import { ApplicationService } from "../application.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  userId: 42,
  name: "exampleName",
  submittedDate: new Date(),
  submitted: "true",
  createdDate: new Date(),
  paid: "true",
  paymentdate: new Date(),
  paymentamount: 42.424242424,
  paymenttype: 42,
  waive: "true",
  waivedate: new Date(),
  complete: "true",
  statementofpurpose: "exampleStatementofpurpose",
  notificationsent: new Date(),
  studentCommit: "true",
  cups: "true",
  womenfellowship: "true",
  pier: "true",
  cnbc: 42,
  portfoliosubmitted: "true",
  portfolioLink: "examplePortfolioLink",
  portfolioPassword: "examplePortfolioPassword",
  area1: "exampleArea1",
  area2: "exampleArea2",
  area3: "exampleArea3",
  buckleywaive: "true",
  referralToProgram: "exampleReferralToProgram",
  recruitingEvent: "exampleRecruitingEvent",
  otherInst: "exampleOtherInst",
  crossDeptProgs: "exampleCrossDeptProgs",
  crossDeptProgsOther: "exampleCrossDeptProgsOther",
  recordsPermission: "exampleRecordsPermission",
  mastersReviewWaiver: "true",
  sentToProgram: "exampleSentToProgram",
  curEnrolled: "exampleCurEnrolled",
  honors: "exampleHonors",
  round2: "exampleRound2",
  round3: "exampleRound3",
  rejectionSent: "exampleRejectionSent",
  waitlistSent: "exampleWaitlistSent",
  previousCoursework: 42,
  hide: "true",
  waiveHigherFee: 42,
  invitationEmailSent: "exampleInvitationEmailSent",
  waiveToefl: 42,
  id: 42,
};
const CREATE_RESULT = {
  userId: 42,
  name: "exampleName",
  submittedDate: new Date(),
  submitted: "true",
  createdDate: new Date(),
  paid: "true",
  paymentdate: new Date(),
  paymentamount: 42.424242424,
  paymenttype: 42,
  waive: "true",
  waivedate: new Date(),
  complete: "true",
  statementofpurpose: "exampleStatementofpurpose",
  notificationsent: new Date(),
  studentCommit: "true",
  cups: "true",
  womenfellowship: "true",
  pier: "true",
  cnbc: 42,
  portfoliosubmitted: "true",
  portfolioLink: "examplePortfolioLink",
  portfolioPassword: "examplePortfolioPassword",
  area1: "exampleArea1",
  area2: "exampleArea2",
  area3: "exampleArea3",
  buckleywaive: "true",
  referralToProgram: "exampleReferralToProgram",
  recruitingEvent: "exampleRecruitingEvent",
  otherInst: "exampleOtherInst",
  crossDeptProgs: "exampleCrossDeptProgs",
  crossDeptProgsOther: "exampleCrossDeptProgsOther",
  recordsPermission: "exampleRecordsPermission",
  mastersReviewWaiver: "true",
  sentToProgram: "exampleSentToProgram",
  curEnrolled: "exampleCurEnrolled",
  honors: "exampleHonors",
  round2: "exampleRound2",
  round3: "exampleRound3",
  rejectionSent: "exampleRejectionSent",
  waitlistSent: "exampleWaitlistSent",
  previousCoursework: 42,
  hide: "true",
  waiveHigherFee: 42,
  invitationEmailSent: "exampleInvitationEmailSent",
  waiveToefl: 42,
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    userId: 42,
    name: "exampleName",
    submittedDate: new Date(),
    submitted: "true",
    createdDate: new Date(),
    paid: "true",
    paymentdate: new Date(),
    paymentamount: 42.424242424,
    paymenttype: 42,
    waive: "true",
    waivedate: new Date(),
    complete: "true",
    statementofpurpose: "exampleStatementofpurpose",
    notificationsent: new Date(),
    studentCommit: "true",
    cups: "true",
    womenfellowship: "true",
    pier: "true",
    cnbc: 42,
    portfoliosubmitted: "true",
    portfolioLink: "examplePortfolioLink",
    portfolioPassword: "examplePortfolioPassword",
    area1: "exampleArea1",
    area2: "exampleArea2",
    area3: "exampleArea3",
    buckleywaive: "true",
    referralToProgram: "exampleReferralToProgram",
    recruitingEvent: "exampleRecruitingEvent",
    otherInst: "exampleOtherInst",
    crossDeptProgs: "exampleCrossDeptProgs",
    crossDeptProgsOther: "exampleCrossDeptProgsOther",
    recordsPermission: "exampleRecordsPermission",
    mastersReviewWaiver: "true",
    sentToProgram: "exampleSentToProgram",
    curEnrolled: "exampleCurEnrolled",
    honors: "exampleHonors",
    round2: "exampleRound2",
    round3: "exampleRound3",
    rejectionSent: "exampleRejectionSent",
    waitlistSent: "exampleWaitlistSent",
    previousCoursework: 42,
    hide: "true",
    waiveHigherFee: 42,
    invitationEmailSent: "exampleInvitationEmailSent",
    waiveToefl: 42,
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  userId: 42,
  name: "exampleName",
  submittedDate: new Date(),
  submitted: "true",
  createdDate: new Date(),
  paid: "true",
  paymentdate: new Date(),
  paymentamount: 42.424242424,
  paymenttype: 42,
  waive: "true",
  waivedate: new Date(),
  complete: "true",
  statementofpurpose: "exampleStatementofpurpose",
  notificationsent: new Date(),
  studentCommit: "true",
  cups: "true",
  womenfellowship: "true",
  pier: "true",
  cnbc: 42,
  portfoliosubmitted: "true",
  portfolioLink: "examplePortfolioLink",
  portfolioPassword: "examplePortfolioPassword",
  area1: "exampleArea1",
  area2: "exampleArea2",
  area3: "exampleArea3",
  buckleywaive: "true",
  referralToProgram: "exampleReferralToProgram",
  recruitingEvent: "exampleRecruitingEvent",
  otherInst: "exampleOtherInst",
  crossDeptProgs: "exampleCrossDeptProgs",
  crossDeptProgsOther: "exampleCrossDeptProgsOther",
  recordsPermission: "exampleRecordsPermission",
  mastersReviewWaiver: "true",
  sentToProgram: "exampleSentToProgram",
  curEnrolled: "exampleCurEnrolled",
  honors: "exampleHonors",
  round2: "exampleRound2",
  round3: "exampleRound3",
  rejectionSent: "exampleRejectionSent",
  waitlistSent: "exampleWaitlistSent",
  previousCoursework: 42,
  hide: "true",
  waiveHigherFee: 42,
  invitationEmailSent: "exampleInvitationEmailSent",
  waiveToefl: 42,
  id: 42,
};

const service = {
  createApplication() {
    return CREATE_RESULT;
  },
  applications: () => FIND_MANY_RESULT,
  application: ({ where }: { where: { id: string } }) => {
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

  test("POST /applications", async () => {
    await request(app.getHttpServer())
      .post("/applications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        submittedDate: CREATE_RESULT.submittedDate.toISOString(),
        createdDate: CREATE_RESULT.createdDate.toISOString(),
        paymentdate: CREATE_RESULT.paymentdate.toISOString(),
        waivedate: CREATE_RESULT.waivedate.toISOString(),
        notificationsent: CREATE_RESULT.notificationsent.toISOString(),
      });
  });

  test("GET /applications", async () => {
    await request(app.getHttpServer())
      .get("/applications")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          submittedDate: FIND_MANY_RESULT[0].submittedDate.toISOString(),
          createdDate: FIND_MANY_RESULT[0].createdDate.toISOString(),
          paymentdate: FIND_MANY_RESULT[0].paymentdate.toISOString(),
          waivedate: FIND_MANY_RESULT[0].waivedate.toISOString(),
          notificationsent: FIND_MANY_RESULT[0].notificationsent.toISOString(),
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
        submittedDate: FIND_ONE_RESULT.submittedDate.toISOString(),
        createdDate: FIND_ONE_RESULT.createdDate.toISOString(),
        paymentdate: FIND_ONE_RESULT.paymentdate.toISOString(),
        waivedate: FIND_ONE_RESULT.waivedate.toISOString(),
        notificationsent: FIND_ONE_RESULT.notificationsent.toISOString(),
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
        submittedDate: CREATE_RESULT.submittedDate.toISOString(),
        createdDate: CREATE_RESULT.createdDate.toISOString(),
        paymentdate: CREATE_RESULT.paymentdate.toISOString(),
        waivedate: CREATE_RESULT.waivedate.toISOString(),
        notificationsent: CREATE_RESULT.notificationsent.toISOString(),
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
