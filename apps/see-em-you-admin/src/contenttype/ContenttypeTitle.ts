import { Contenttype as TContenttype } from "../api/contenttype/Contenttype";

export const CONTENTTYPE_TITLE_FIELD = "name";

export const ContenttypeTitle = (record: TContenttype): string => {
  return record.name?.toString() || String(record.id);
};
