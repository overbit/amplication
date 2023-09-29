import { SlateLangCode as TSlateLangCode } from "../api/slateLangCode/SlateLangCode";

export const SLATELANGCODE_TITLE_FIELD = "language";

export const SlateLangCodeTitle = (record: TSlateLangCode): string => {
  return record.language?.toString() || String(record.id);
};
