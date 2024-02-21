import { Application } from "../application/Application";

export type StudentDecision = {
  programId: number;
  decision?: "accept" | "decline" | "defer" | "matriculate" | null;
  acceptReasons: string | null;
  otherChoice: string | null;
  otherChoiceLocation: string | null;
  decisionReasons: string | null;
  visit: boolean | null;
  visitComments: string | null;
  otherSchoolsApplied: string | null;
  otherSchoolsAccepted: string | null;
  submitted: boolean | null;
  submittedDate: Date;
  visitHelpful: boolean | null;
  maritalStatus: string | null;
  maritalOther: string | null;
  affiliatedCmu: boolean | null;
  progLength: string | null;
  attendAcc: string | null;
  legalName: string | null;
  prefName: string | null;
  prefEmail: string | null;
  dob: Date | null;
  gender: string | null;
  genderOther: string | null;
  telMobile: string | null;
  streetP1: string | null;
  streetP2: string | null;
  streetP3: string | null;
  streetP4: string | null;
  cityP: string | null;
  stateP: string | null;
  postalP: string | null;
  countryP: string | null;
  citCountry: string | null;
  hispanic: number | null;
  natAm: number | null;
  black: number | null;
  asian: number | null;
  hpi: number | null;
  cau: number | null;
  doneDiff: string | null;
  admin: number | null;
  optComm: number | null;
  errors: string | null;
  deferralReasons: string | null;
  deferralSemester: string | null;
  deferralYear: string | null;
  pronoun: string | null;
  pronounOther: string | null;
  affiliatedCmutxt: string | null;
  application?: Application;
  id: string;
};
