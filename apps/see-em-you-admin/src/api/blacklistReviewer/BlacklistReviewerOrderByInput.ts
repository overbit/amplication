import { SortOrder } from "../../util/SortOrder";

export type BlacklistReviewerOrderByInput = {
  appId?: SortOrder;
  reviewerId?: SortOrder;
  deny?: SortOrder;
  id?: SortOrder;
};
