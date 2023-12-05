import { EtsGreCopy as TEtsGreCopy } from "../api/etsGreCopy/EtsGreCopy";

export const ETSGRECOPY_TITLE_FIELD = "countryName";

export const EtsGreCopyTitle = (record: TEtsGreCopy): string => {
  return record.countryName?.toString() || String(record.id);
};
