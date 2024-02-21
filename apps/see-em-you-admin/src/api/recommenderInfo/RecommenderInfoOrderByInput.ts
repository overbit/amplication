import { SortOrder } from "../../util/SortOrder";

export type RecommenderInfoOrderByInput = {
  recUserId?: SortOrder;
  title?: SortOrder;
  affiliation?: SortOrder;
  phone?: SortOrder;
  relationshipToApplicant?: SortOrder;
  id?: SortOrder;
};
