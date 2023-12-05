import { Accesslog as TAccesslog } from "../api/accesslog/Accesslog";

export const ACCESSLOG_TITLE_FIELD = "activity";

export const AccesslogTitle = (record: TAccesslog): string => {
  return record.activity?.toString() || String(record.id);
};
