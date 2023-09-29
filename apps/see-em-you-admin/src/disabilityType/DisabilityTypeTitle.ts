import { DisabilityType as TDisabilityType } from "../api/disabilityType/DisabilityType";

export const DISABILITYTYPE_TITLE_FIELD = "value";

export const DisabilityTypeTitle = (record: TDisabilityType): string => {
  return record.value?.toString() || String(record.id);
};
