import { SlateCodility as TSlateCodility } from "../api/slateCodility/SlateCodility";

export const SLATECODILITY_TITLE_FIELD = "codilityTask1Name";

export const SlateCodilityTitle = (record: TSlateCodility): string => {
  return record.codilityTask1Name?.toString() || String(record.id);
};
