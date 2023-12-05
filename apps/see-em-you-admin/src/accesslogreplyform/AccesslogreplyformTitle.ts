import { Accesslogreplyform as TAccesslogreplyform } from "../api/accesslogreplyform/Accesslogreplyform";

export const ACCESSLOGREPLYFORM_TITLE_FIELD = "activity";

export const AccesslogreplyformTitle = (
  record: TAccesslogreplyform
): string => {
  return record.activity?.toString() || String(record.id);
};
