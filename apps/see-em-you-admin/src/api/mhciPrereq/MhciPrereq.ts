import { Application } from "../application/Application";
import { MhciPrereqsConversationComment } from "../mhciPrereqsConversationComment/MhciPrereqsConversationComment";
import { MhciPrereqsStatus } from "../mhciPrereqsStatus/MhciPrereqsStatus";

export type MhciPrereq = {
  studentLuUsersUsertypesId: number;
  prereq_type?: "design" | "programming" | "statistics";
  periodId: number;
  student_assessment?: "fulfilledTrue" | "fulfilledFalse" | null;
  status2?:
    | "Student_Saved"
    | "Not_Submitted"
    | "Student_Submitted"
    | "Student_Edited"
    | "Reviewer_Responded"
    | null;
  timestamp: Date;
  application?: Application;
  mhciPrereqsConversationComments?: Array<MhciPrereqsConversationComment>;
  mhciPrereqsStatus?: MhciPrereqsStatus | null;
  id: number;
};
