import { LuReviewerGroupWhereInput } from "./LuReviewerGroupWhereInput";
import { LuReviewerGroupOrderByInput } from "./LuReviewerGroupOrderByInput";

export type LuReviewerGroupFindManyArgs = {
  where?: LuReviewerGroupWhereInput;
  orderBy?: Array<LuReviewerGroupOrderByInput>;
  skip?: number;
  take?: number;
};
