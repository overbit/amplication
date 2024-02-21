export type TeachingExperienceUpdateInput = {
  applicationId?: number;
  orderEntered?: number | null;
  institution?: string | null;
  address?: string | null;
  coursesTaught?: string | null;
  startDate?: Date | null;
  endDate?: string | null;
};
