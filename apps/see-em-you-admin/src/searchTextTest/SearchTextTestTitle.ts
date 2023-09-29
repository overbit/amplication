import { SearchTextTest as TSearchTextTest } from "../api/searchTextTest/SearchTextTest";

export const SEARCHTEXTTEST_TITLE_FIELD = "applicationId";

export const SearchTextTestTitle = (record: TSearchTextTest): string => {
  return record.applicationId?.toString() || String(record.id);
};
