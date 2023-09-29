import { SlateRecommend2WhereInput } from "./SlateRecommend2WhereInput";
import { SlateRecommend2OrderByInput } from "./SlateRecommend2OrderByInput";

export type SlateRecommend2FindManyArgs = {
  where?: SlateRecommend2WhereInput;
  orderBy?: Array<SlateRecommend2OrderByInput>;
  skip?: number;
  take?: number;
};
