import { GroupRank as TGroupRank } from "../api/groupRank/GroupRank";

export const GROUPRANK_TITLE_FIELD = "comment";

export const GroupRankTitle = (record: TGroupRank): string => {
  return record.comment?.toString() || String(record.id);
};
