export type TeachingExperienceCreateInput = {
  address?: string | null;
  applicationId: number;
  coursesTaught?: string | null;
  endDate?: string | null;
  institution?: string | null;
  orderEntered?: number | null;
  startDate?: Date | null;
};
