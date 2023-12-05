import { IniYearsExperience as TIniYearsExperience } from "../api/iniYearsExperience/IniYearsExperience";

export const INIYEARSEXPERIENCE_TITLE_FIELD = "id";

export const IniYearsExperienceTitle = (
  record: TIniYearsExperience
): string => {
  return record.id?.toString() || String(record.id);
};
