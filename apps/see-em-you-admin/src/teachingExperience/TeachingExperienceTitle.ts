import { TeachingExperience as TTeachingExperience } from "../api/teachingExperience/TeachingExperience";

export const TEACHINGEXPERIENCE_TITLE_FIELD = "address";

export const TeachingExperienceTitle = (
  record: TTeachingExperience
): string => {
  return record.address?.toString() || String(record.id);
};
