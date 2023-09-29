import { Content as TContent } from "../api/content/Content";

export const CONTENT_TITLE_FIELD = "name";

export const ContentTitle = (record: TContent): string => {
  return record.name?.toString() || String(record.id);
};
