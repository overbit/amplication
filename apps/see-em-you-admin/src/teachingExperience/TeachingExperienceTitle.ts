import { TeachingExperience as TTeachingExperience } from "../api/teachingExperience/TeachingExperience";

export const TEACHINGEXPERIENCE_TITLE_FIELD = "institution";

export const TeachingExperienceTitle = (
  record: TTeachingExperience
): string => {
  return record.institution?.toString() || String(record.id);
};
