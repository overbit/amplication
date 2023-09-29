import { DuolingoDatum as TDuolingoDatum } from "../api/duolingoDatum/DuolingoDatum";

export const DUOLINGODATUM_TITLE_FIELD = "firstName";

export const DuolingoDatumTitle = (record: TDuolingoDatum): string => {
  return record.firstName?.toString() || String(record.id);
};
