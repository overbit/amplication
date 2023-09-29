import { RecommenderInfoWhereInput } from "./RecommenderInfoWhereInput";
import { RecommenderInfoOrderByInput } from "./RecommenderInfoOrderByInput";

export type RecommenderInfoFindManyArgs = {
  where?: RecommenderInfoWhereInput;
  orderBy?: Array<RecommenderInfoOrderByInput>;
  skip?: number;
  take?: number;
};
