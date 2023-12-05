import { MitsSlateCodility as TMitsSlateCodility } from "../api/mitsSlateCodility/MitsSlateCodility";

export const MITSSLATECODILITY_TITLE_FIELD = "codilityTask1Name";

export const MitsSlateCodilityTitle = (record: TMitsSlateCodility): string => {
  return record.codilityTask1Name?.toString() || String(record.id);
};
