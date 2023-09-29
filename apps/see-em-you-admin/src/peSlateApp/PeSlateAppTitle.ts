import { PeSlateApp as TPeSlateApp } from "../api/peSlateApp/PeSlateApp";

export const PESLATEAPP_TITLE_FIELD = "mailingAddressCountryName";

export const PeSlateAppTitle = (record: TPeSlateApp): string => {
  return record.mailingAddressCountryName?.toString() || String(record.id);
};
