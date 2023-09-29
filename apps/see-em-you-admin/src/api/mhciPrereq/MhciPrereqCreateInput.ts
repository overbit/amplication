import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { MhciPrereqsConversationCommentCreateNestedManyWithoutMhciPrereqsInput } from "./MhciPrereqsConversationCommentCreateNestedManyWithoutMhciPrereqsInput";
import { MhciPrereqsStatusWhereUniqueInput } from "../mhciPrereqsStatus/MhciPrereqsStatusWhereUniqueInput";

export type MhciPrereqCreateInput = {
  application: ApplicationWhereUniqueInput;
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentCreateNestedManyWithoutMhciPrereqsInput;
  mhciPrereqsStatus?: MhciPrereqsStatusWhereUniqueInput | null;
  periodId: number;
  prereq_type: "design" | "programming" | "statistics";
  status2?:
    | "Student_Saved"
    | "Not_Submitted"
    | "Student_Submitted"
    | "Student_Edited"
    | "Reviewer_Responded"
    | null;
  student_assessment?: "fulfilledTrue" | "fulfilledFalse" | null;
  studentLuUsersUsertypesId: number;
};
