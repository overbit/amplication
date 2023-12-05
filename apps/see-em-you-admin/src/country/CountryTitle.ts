import { Country as TCountry } from "../api/country/Country";

export const COUNTRY_TITLE_FIELD = "name";

export const CountryTitle = (record: TCountry): string => {
  return record.name?.toString() || String(record.id);
};
