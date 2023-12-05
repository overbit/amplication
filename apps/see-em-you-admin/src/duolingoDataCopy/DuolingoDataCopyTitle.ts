import { DuolingoDataCopy as TDuolingoDataCopy } from "../api/duolingoDataCopy/DuolingoDataCopy";

export const DUOLINGODATACOPY_TITLE_FIELD = "firstName";

export const DuolingoDataCopyTitle = (record: TDuolingoDataCopy): string => {
  return record.firstName?.toString() || String(record.id);
};
