import { SortOrder } from "../../util/SortOrder";

export type StudentDecisionHistoryOrderByInput = {
  application_id?: SortOrder;
  decision?: SortOrder;
  deferralSemester?: SortOrder;
  deferralYear?: SortOrder;
  id?: SortOrder;
  insertDate?: SortOrder;
  programId?: SortOrder;
};
