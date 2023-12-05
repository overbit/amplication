import { RecommendWhereInput } from "./RecommendWhereInput";
import { RecommendOrderByInput } from "./RecommendOrderByInput";

export type RecommendFindManyArgs = {
  where?: RecommendWhereInput;
  orderBy?: Array<RecommendOrderByInput>;
  skip?: number;
  take?: number;
};
