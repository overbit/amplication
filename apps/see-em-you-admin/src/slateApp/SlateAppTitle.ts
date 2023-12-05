import { SlateApp as TSlateApp } from "../api/slateApp/SlateApp";

export const SLATEAPP_TITLE_FIELD = "mailingAddressCountryName";

export const SlateAppTitle = (record: TSlateApp): string => {
  return record.mailingAddressCountryName?.toString() || String(record.id);
};
