import { SortOrder } from "../../util/SortOrder";

export type MhciPrereqsConversationCommentOrderByInput = {
  applicationId?: SortOrder;
  comment?: SortOrder;
  id?: SortOrder;
  lu_users_usertypes_id?: SortOrder;
  prereq_id?: SortOrder;
  periodId?: SortOrder;
  programId?: SortOrder;
  timestamp?: SortOrder;
};
