import { GroupRankCommentWhereInput } from "./GroupRankCommentWhereInput";
import { GroupRankCommentOrderByInput } from "./GroupRankCommentOrderByInput";

export type GroupRankCommentFindManyArgs = {
  where?: GroupRankCommentWhereInput;
  orderBy?: Array<GroupRankCommentOrderByInput>;
  skip?: number;
  take?: number;
};
