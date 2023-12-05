import { TestusersInfo as TTestusersInfo } from "../api/testusersInfo/TestusersInfo";

export const TESTUSERSINFO_TITLE_FIELD = "additionalinfo";

export const TestusersInfoTitle = (record: TTestusersInfo): string => {
  return record.additionalinfo?.toString() || String(record.id);
};
