import { PositiveFactor as TPositiveFactor } from "../api/positiveFactor/PositiveFactor";

export const POSITIVEFACTOR_TITLE_FIELD = "positiveFactor";

export const PositiveFactorTitle = (record: TPositiveFactor): string => {
  return record.positiveFactor?.toString() || String(record.id);
};
