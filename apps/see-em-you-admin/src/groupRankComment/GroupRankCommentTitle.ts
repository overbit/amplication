import { GroupRankComment as TGroupRankComment } from "../api/groupRankComment/GroupRankComment";

export const GROUPRANKCOMMENT_TITLE_FIELD = "comment";

export const GroupRankCommentTitle = (record: TGroupRankComment): string => {
  return record.comment?.toString() || String(record.id);
};
