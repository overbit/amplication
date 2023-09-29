import { MseRiskFactor as TMseRiskFactor } from "../api/mseRiskFactor/MseRiskFactor";

export const MSERISKFACTOR_TITLE_FIELD = "otherText";

export const MseRiskFactorTitle = (record: TMseRiskFactor): string => {
  return record.otherText?.toString() || String(record.id);
};
