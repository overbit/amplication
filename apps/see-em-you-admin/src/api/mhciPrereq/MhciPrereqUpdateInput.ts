import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { MhciPrereqsConversationCommentUpdateManyWithoutMhciPrereqsInput } from "./MhciPrereqsConversationCommentUpdateManyWithoutMhciPrereqsInput";
import { MhciPrereqsStatusWhereUniqueInput } from "../mhciPrereqsStatus/MhciPrereqsStatusWhereUniqueInput";

export type MhciPrereqUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentUpdateManyWithoutMhciPrereqsInput;
  mhciPrereqsStatus?: MhciPrereqsStatusWhereUniqueInput | null;
  periodId?: number;
  prereq_type?: "design" | "programming" | "statistics";
  status2?:
    | "Student_Saved"
    | "Not_Submitted"
    | "Student_Submitted"
    | "Student_Edited"
    | "Reviewer_Responded"
    | null;
  student_assessment?: "fulfilledTrue" | "fulfilledFalse" | null;
  studentLuUsersUsertypesId?: number;
};
