import { Ethnicity as TEthnicity } from "../api/ethnicity/Ethnicity";

export const ETHNICITY_TITLE_FIELD = "name";

export const EthnicityTitle = (record: TEthnicity): string => {
  return record.name?.toString() || String(record.id);
};
