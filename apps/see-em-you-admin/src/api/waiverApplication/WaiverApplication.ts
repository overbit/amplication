export type WaiverApplication = {
  id: number;
  applicationId: number;
  orgId: number;
  datafileId: number | null;
  createDate: Date | null;
  updateDate: Date | null;
};
