import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { MhciPrereqsConversationCommentUpdateManyWithoutMhciPrereqsInput } from "./MhciPrereqsConversationCommentUpdateManyWithoutMhciPrereqsInput";
import { MhciPrereqsStatusWhereUniqueInput } from "../mhciPrereqsStatus/MhciPrereqsStatusWhereUniqueInput";

export type MhciPrereqUpdateInput = {
  studentLuUsersUsertypesId?: number;
  prereq_type?: "design" | "programming" | "statistics";
  periodId?: number;
  student_assessment?: "fulfilledTrue" | "fulfilledFalse" | null;
  status2?:
    | "Student_Saved"
    | "Not_Submitted"
    | "Student_Submitted"
    | "Student_Edited"
    | "Reviewer_Responded"
    | null;
  application?: ApplicationWhereUniqueInput;
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentUpdateManyWithoutMhciPrereqsInput;
  mhciPrereqsStatus?: MhciPrereqsStatusWhereUniqueInput | null;
};
