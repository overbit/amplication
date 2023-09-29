import { Em2FinancialSupport as TEm2FinancialSupport } from "../api/em2FinancialSupport/Em2FinancialSupport";

export const EM2FINANCIALSUPPORT_TITLE_FIELD = "applyOutsideSupportSource";

export const Em2FinancialSupportTitle = (
  record: TEm2FinancialSupport
): string => {
  return record.applyOutsideSupportSource?.toString() || String(record.id);
};
