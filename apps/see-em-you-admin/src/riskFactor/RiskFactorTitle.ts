import { RiskFactor as TRiskFactor } from "../api/riskFactor/RiskFactor";

export const RISKFACTOR_TITLE_FIELD = "riskFactor";

export const RiskFactorTitle = (record: TRiskFactor): string => {
  return record.riskFactor?.toString() || String(record.id);
};
