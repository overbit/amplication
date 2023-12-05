import { ApplicationContent as TApplicationContent } from "../api/applicationContent/ApplicationContent";

export const APPLICATIONCONTENT_TITLE_FIELD = "sectionIdentifier";

export const ApplicationContentTitle = (
  record: TApplicationContent
): string => {
  return record.sectionIdentifier?.toString() || String(record.id);
};
