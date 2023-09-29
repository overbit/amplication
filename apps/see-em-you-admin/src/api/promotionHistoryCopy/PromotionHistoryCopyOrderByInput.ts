import { SortOrder } from "../../util/SortOrder";

export type PromotionHistoryCopyOrderByInput = {
  applicationId?: SortOrder;
  id?: SortOrder;
  programId?: SortOrder;
  promotion_method?: SortOrder;
  round?: SortOrder;
  statusTime?: SortOrder;
  usersId?: SortOrder;
};
