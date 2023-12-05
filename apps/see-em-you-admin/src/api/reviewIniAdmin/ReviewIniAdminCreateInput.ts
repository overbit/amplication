export type ReviewIniAdminCreateInput = {
  applicationId: number;
  comments: string;
  departmentId: number;
  reviewerId: number;
  round?: number | null;
};
