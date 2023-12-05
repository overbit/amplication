import { ContentBak as TContentBak } from "../api/contentBak/ContentBak";

export const CONTENTBAK_TITLE_FIELD = "name";

export const ContentBakTitle = (record: TContentBak): string => {
  return record.name?.toString() || String(record.id);
};
