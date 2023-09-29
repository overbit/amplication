import { SortOrder } from "../../util/SortOrder";

export type PromotionHistoryOrderByInput = {
  application_id?: SortOrder;
  id?: SortOrder;
  programId?: SortOrder;
  promotion_method?: SortOrder;
  round?: SortOrder;
  statusTime?: SortOrder;
  usersId?: SortOrder;
};
