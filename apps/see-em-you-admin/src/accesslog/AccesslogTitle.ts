import { Accesslog as TAccesslog } from "../api/accesslog/Accesslog";

export const ACCESSLOG_TITLE_FIELD = "client";

export const AccesslogTitle = (record: TAccesslog): string => {
  return record.client?.toString() || String(record.id);
};
