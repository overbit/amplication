import { SortOrder } from "../../util/SortOrder";

export type BlacklistReviewerOrderByInput = {
  appId?: SortOrder;
  deny?: SortOrder;
  id?: SortOrder;
  reviewerId?: SortOrder;
};
