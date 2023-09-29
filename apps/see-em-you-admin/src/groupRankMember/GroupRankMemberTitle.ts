import { GroupRankMember as TGroupRankMember } from "../api/groupRankMember/GroupRankMember";

export const GROUPRANKMEMBER_TITLE_FIELD = "id";

export const GroupRankMemberTitle = (record: TGroupRankMember): string => {
  return record.id?.toString() || String(record.id);
};
