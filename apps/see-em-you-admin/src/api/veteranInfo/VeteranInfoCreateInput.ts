export type VeteranInfoCreateInput = {
  branch?: string | null;
  discharge?: string | null;
  enddate?: Date | null;
  startdate?: Date | null;
  status?: string | null;
  statusEnroll?: string | null;
  userId: number;
};
