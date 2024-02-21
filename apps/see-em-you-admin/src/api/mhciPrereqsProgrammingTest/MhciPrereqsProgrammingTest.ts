import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";

export type MhciPrereqsProgrammingTest = {
  downloadTimestamp: Date | null;
  uploadDatafileinfoId: number | null;
  applicationId: number;
  periodId: number;
  luUsersUsertypes?: LuUsersUsertype;
  id: number;
};
