import { SortOrder } from "../../util/SortOrder";

export type RecommenderInfoOrderByInput = {
  affiliation?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  recUserId?: SortOrder;
  relationshipToApplicant?: SortOrder;
  title?: SortOrder;
};
