import { TagMember as TTagMember } from "../api/tagMember/TagMember";

export const TAGMEMBER_TITLE_FIELD = "id";

export const TagMemberTitle = (record: TTagMember): string => {
  return record.id?.toString() || String(record.id);
};
