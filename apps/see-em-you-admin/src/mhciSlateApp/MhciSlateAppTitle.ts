import { MhciSlateApp as TMhciSlateApp } from "../api/mhciSlateApp/MhciSlateApp";

export const MHCISLATEAPP_TITLE_FIELD = "mailingAddressCountryName";

export const MhciSlateAppTitle = (record: TMhciSlateApp): string => {
  return record.mailingAddressCountryName?.toString() || String(record.id);
};
