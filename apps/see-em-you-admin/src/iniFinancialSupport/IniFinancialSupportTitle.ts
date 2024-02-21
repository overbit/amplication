import { IniFinancialSupport as TIniFinancialSupport } from "../api/iniFinancialSupport/IniFinancialSupport";

export const INIFINANCIALSUPPORT_TITLE_FIELD = "receiveOutsideSupportType";

export const IniFinancialSupportTitle = (
  record: TIniFinancialSupport
): string => {
  return record.receiveOutsideSupportType?.toString() || String(record.id);
};
