import { IniFinancialSupport as TIniFinancialSupport } from "../api/iniFinancialSupport/IniFinancialSupport";

export const INIFINANCIALSUPPORT_TITLE_FIELD = "applyOutsideSupportSource";

export const IniFinancialSupportTitle = (
  record: TIniFinancialSupport
): string => {
  return record.applyOutsideSupportSource?.toString() || String(record.id);
};
