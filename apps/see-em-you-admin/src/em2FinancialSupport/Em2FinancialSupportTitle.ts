import { Em2FinancialSupport as TEm2FinancialSupport } from "../api/em2FinancialSupport/Em2FinancialSupport";

export const EM2FINANCIALSUPPORT_TITLE_FIELD = "receiveOutsideSupportType";

export const Em2FinancialSupportTitle = (
  record: TEm2FinancialSupport
): string => {
  return record.receiveOutsideSupportType?.toString() || String(record.id);
};
