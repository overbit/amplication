import { SortOrder } from "../../util/SortOrder";

export type PromotionHistoryOrderByInput = {
  programId?: SortOrder;
  statusTime?: SortOrder;
  round?: SortOrder;
  promotion_method?: SortOrder;
  usersId?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
