import { Reclog as TReclog } from "../api/reclog/Reclog";

export const RECLOG_TITLE_FIELD = "ip";

export const ReclogTitle = (record: TReclog): string => {
  return record.ip?.toString() || String(record.id);
};
