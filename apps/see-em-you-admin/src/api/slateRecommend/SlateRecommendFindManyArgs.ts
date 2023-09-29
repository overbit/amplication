import { SlateRecommendWhereInput } from "./SlateRecommendWhereInput";
import { SlateRecommendOrderByInput } from "./SlateRecommendOrderByInput";

export type SlateRecommendFindManyArgs = {
  where?: SlateRecommendWhereInput;
  orderBy?: Array<SlateRecommendOrderByInput>;
  skip?: number;
  take?: number;
};
