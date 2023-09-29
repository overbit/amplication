import { Experience as TExperience } from "../api/experience/Experience";

export const EXPERIENCE_TITLE_FIELD = "jobTitle";

export const ExperienceTitle = (record: TExperience): string => {
  return record.jobTitle?.toString() || String(record.id);
};
