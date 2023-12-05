import { Disability as TDisability } from "../api/disability/Disability";

export const DISABILITY_TITLE_FIELD = "id";

export const DisabilityTitle = (record: TDisability): string => {
  return record.id?.toString() || String(record.id);
};
