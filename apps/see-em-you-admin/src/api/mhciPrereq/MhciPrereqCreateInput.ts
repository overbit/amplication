import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { MhciPrereqsConversationCommentCreateNestedManyWithoutMhciPrereqsInput } from "./MhciPrereqsConversationCommentCreateNestedManyWithoutMhciPrereqsInput";
import { MhciPrereqsStatusWhereUniqueInput } from "../mhciPrereqsStatus/MhciPrereqsStatusWhereUniqueInput";

export type MhciPrereqCreateInput = {
  studentLuUsersUsertypesId: number;
  prereq_type: "design" | "programming" | "statistics";
  periodId: number;
  student_assessment?: "fulfilledTrue" | "fulfilledFalse" | null;
  status2?:
    | "Student_Saved"
    | "Not_Submitted"
    | "Student_Submitted"
    | "Student_Edited"
    | "Reviewer_Responded"
    | null;
  application: ApplicationWhereUniqueInput;
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentCreateNestedManyWithoutMhciPrereqsInput;
  mhciPrereqsStatus?: MhciPrereqsStatusWhereUniqueInput | null;
};
