import { SpecialConsideration as TSpecialConsideration } from "../api/specialConsideration/SpecialConsideration";

export const SPECIALCONSIDERATION_TITLE_FIELD = "id";

export const SpecialConsiderationTitle = (
  record: TSpecialConsideration
): string => {
  return record.id?.toString() || String(record.id);
};
