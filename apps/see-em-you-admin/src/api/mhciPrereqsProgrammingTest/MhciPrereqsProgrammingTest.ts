import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";

export type MhciPrereqsProgrammingTest = {
  applicationId: number;
  downloadTimestamp: Date | null;
  id: number;
  luUsersUsertypes?: LuUsersUsertype;
  periodId: number;
  uploadDatafileinfoId: number | null;
};
