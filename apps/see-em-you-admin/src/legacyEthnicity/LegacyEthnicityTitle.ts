import { LegacyEthnicity as TLegacyEthnicity } from "../api/legacyEthnicity/LegacyEthnicity";

export const LEGACYETHNICITY_TITLE_FIELD = "name";

export const LegacyEthnicityTitle = (record: TLegacyEthnicity): string => {
  return record.name?.toString() || String(record.id);
};
