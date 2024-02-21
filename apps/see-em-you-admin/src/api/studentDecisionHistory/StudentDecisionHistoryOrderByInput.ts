import { SortOrder } from "../../util/SortOrder";

export type StudentDecisionHistoryOrderByInput = {
  programId?: SortOrder;
  decision?: SortOrder;
  deferralSemester?: SortOrder;
  deferralYear?: SortOrder;
  insertDate?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
