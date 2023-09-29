import { MitsSlateApp as TMitsSlateApp } from "../api/mitsSlateApp/MitsSlateApp";

export const MITSSLATEAPP_TITLE_FIELD = "mailingAddressCountryName";

export const MitsSlateAppTitle = (record: TMitsSlateApp): string => {
  return record.mailingAddressCountryName?.toString() || String(record.id);
};
