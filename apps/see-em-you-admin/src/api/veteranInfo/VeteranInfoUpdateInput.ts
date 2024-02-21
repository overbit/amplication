export type VeteranInfoUpdateInput = {
  userId?: number;
  status?: string | null;
  statusEnroll?: string | null;
  branch?: string | null;
  startdate?: Date | null;
  enddate?: Date | null;
  discharge?: string | null;
};
