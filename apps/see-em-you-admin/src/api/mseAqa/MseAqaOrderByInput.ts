import { SortOrder } from "../../util/SortOrder";

export type MseAqaOrderByInput = {
  reviewerId?: SortOrder;
  englishComments?: SortOrder;
  programmingComments?: SortOrder;
  foundationalComments?: SortOrder;
  maturityComments?: SortOrder;
  understandingComments?: SortOrder;
  experienceComments?: SortOrder;
  englishRating?: SortOrder;
  programmingRating?: SortOrder;
  foundationalRating?: SortOrder;
  maturityRating?: SortOrder;
  understandingRating?: SortOrder;
  experienceRating?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
