import { SortOrder } from "../../util/SortOrder";

export type MhciPrereqsConversationCommentOrderByInput = {
  applicationId?: SortOrder;
  comment?: SortOrder;
  timestamp?: SortOrder;
  periodId?: SortOrder;
  programId?: SortOrder;
  prereq_id?: SortOrder;
  lu_users_usertypes_id?: SortOrder;
  id?: SortOrder;
};
