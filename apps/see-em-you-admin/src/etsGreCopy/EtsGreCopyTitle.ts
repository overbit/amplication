import { EtsGreCopy as TEtsGreCopy } from "../api/etsGreCopy/EtsGreCopy";

export const ETSGRECOPY_TITLE_FIELD = "instName";

export const EtsGreCopyTitle = (record: TEtsGreCopy): string => {
  return record.instName?.toString() || String(record.id);
};
