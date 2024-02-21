import { DuolingoDataCopy as TDuolingoDataCopy } from "../api/duolingoDataCopy/DuolingoDataCopy";

export const DUOLINGODATACOPY_TITLE_FIELD = "lastName";

export const DuolingoDataCopyTitle = (record: TDuolingoDataCopy): string => {
  return record.lastName?.toString() || String(record.id);
};
