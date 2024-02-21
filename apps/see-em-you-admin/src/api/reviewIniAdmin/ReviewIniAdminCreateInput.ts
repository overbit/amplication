export type ReviewIniAdminCreateInput = {
  applicationId: number;
  reviewerId: number;
  departmentId: number;
  round?: number | null;
  comments: string;
};
