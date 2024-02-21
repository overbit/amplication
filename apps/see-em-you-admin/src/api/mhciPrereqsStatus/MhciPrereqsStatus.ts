import { MhciPrereq } from "../mhciPrereq/MhciPrereq";

export type MhciPrereqsStatus = {
  reviewerLuUsersUsertypesId: number | null;
  reviewer_status?:
    | "Not_Submitted"
    | "Submitted"
    | "In_progress"
    | "Approved_plan_"
    | "Fulfilled__undergraduate_degree"
    | "Fulfilled_";
  reviewerExplanation: string | null;
  reviewerTimestamp: Date | null;
  status3?:
    | "Saved_Not_Submitted"
    | "Student_Submitted"
    | "Student_Edited"
    | "Reviewer_Responded"
    | null;
  programId: number | null;
  mhciPrereqs?: MhciPrereq;
  id: number;
};
