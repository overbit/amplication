import { DuolingoDatum as TDuolingoDatum } from "../api/duolingoDatum/DuolingoDatum";

export const DUOLINGODATUM_TITLE_FIELD = "lastName";

export const DuolingoDatumTitle = (record: TDuolingoDatum): string => {
  return record.lastName?.toString() || String(record.id);
};
