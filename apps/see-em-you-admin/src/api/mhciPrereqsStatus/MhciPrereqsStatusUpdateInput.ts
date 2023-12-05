import { MhciPrereqWhereUniqueInput } from "../mhciPrereq/MhciPrereqWhereUniqueInput";

export type MhciPrereqsStatusUpdateInput = {
  mhciPrereqs?: MhciPrereqWhereUniqueInput;
  programId?: number | null;
  reviewerExplanation?: string | null;
  reviewerLuUsersUsertypesId?: number | null;
  reviewer_status?:
    | "Not_Submitted"
    | "Submitted"
    | "In_progress"
    | "Approved_plan_"
    | "Fulfilled__undergraduate_degree"
    | "Fulfilled_";
  reviewerTimestamp?: Date | null;
  status3?:
    | "Saved_Not_Submitted"
    | "Student_Submitted"
    | "Student_Edited"
    | "Reviewer_Responded"
    | null;
};
