import { Application } from "../application/Application";
import { MhciPrereqsConversationComment } from "../mhciPrereqsConversationComment/MhciPrereqsConversationComment";
import { MhciPrereqsStatus } from "../mhciPrereqsStatus/MhciPrereqsStatus";

export type MhciPrereq = {
  application?: Application;
  id: number;
  mhciPrereqsConversationComments?: Array<MhciPrereqsConversationComment>;
  mhciPrereqsStatus?: MhciPrereqsStatus | null;
  periodId: number;
  prereq_type?: "design" | "programming" | "statistics";
  status2?:
    | "Student_Saved"
    | "Not_Submitted"
    | "Student_Submitted"
    | "Student_Edited"
    | "Reviewer_Responded"
    | null;
  student_assessment?: "fulfilledTrue" | "fulfilledFalse" | null;
  studentLuUsersUsertypesId: number;
  timestamp: Date;
};
