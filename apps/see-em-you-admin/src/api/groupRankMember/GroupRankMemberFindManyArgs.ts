import { GroupRankMemberWhereInput } from "./GroupRankMemberWhereInput";
import { GroupRankMemberOrderByInput } from "./GroupRankMemberOrderByInput";

export type GroupRankMemberFindManyArgs = {
  where?: GroupRankMemberWhereInput;
  orderBy?: Array<GroupRankMemberOrderByInput>;
  skip?: number;
  take?: number;
};
