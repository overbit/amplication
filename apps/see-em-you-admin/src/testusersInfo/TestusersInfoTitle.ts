import { TestusersInfo as TTestusersInfo } from "../api/testusersInfo/TestusersInfo";

export const TESTUSERSINFO_TITLE_FIELD = "gender";

export const TestusersInfoTitle = (record: TTestusersInfo): string => {
  return record.gender?.toString() || String(record.id);
};
