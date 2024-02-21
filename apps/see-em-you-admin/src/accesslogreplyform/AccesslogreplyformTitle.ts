import { Accesslogreplyform as TAccesslogreplyform } from "../api/accesslogreplyform/Accesslogreplyform";

export const ACCESSLOGREPLYFORM_TITLE_FIELD = "client";

export const AccesslogreplyformTitle = (
  record: TAccesslogreplyform
): string => {
  return record.client?.toString() || String(record.id);
};
