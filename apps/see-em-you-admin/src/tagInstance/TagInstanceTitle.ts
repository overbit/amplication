import { TagInstance as TTagInstance } from "../api/tagInstance/TagInstance";

export const TAGINSTANCE_TITLE_FIELD = "id";

export const TagInstanceTitle = (record: TTagInstance): string => {
  return record.id?.toString() || String(record.id);
};
