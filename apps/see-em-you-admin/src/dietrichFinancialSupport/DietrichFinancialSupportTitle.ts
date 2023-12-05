import { DietrichFinancialSupport as TDietrichFinancialSupport } from "../api/dietrichFinancialSupport/DietrichFinancialSupport";

export const DIETRICHFINANCIALSUPPORT_TITLE_FIELD = "supportSources";

export const DietrichFinancialSupportTitle = (
  record: TDietrichFinancialSupport
): string => {
  return record.supportSources?.toString() || String(record.id);
};
