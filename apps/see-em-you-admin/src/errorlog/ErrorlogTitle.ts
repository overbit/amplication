import { Errorlog as TErrorlog } from "../api/errorlog/Errorlog";

export const ERRORLOG_TITLE_FIELD = "client";

export const ErrorlogTitle = (record: TErrorlog): string => {
  return record.client?.toString() || String(record.id);
};
