import { SortOrder } from "../../util/SortOrder";

export type PromotionHistoryCopyOrderByInput = {
  applicationId?: SortOrder;
  programId?: SortOrder;
  statusTime?: SortOrder;
  round?: SortOrder;
  promotion_method?: SortOrder;
  usersId?: SortOrder;
  id?: SortOrder;
};
