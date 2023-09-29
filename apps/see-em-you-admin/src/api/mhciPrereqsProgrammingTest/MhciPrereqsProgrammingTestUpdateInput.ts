import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";

export type MhciPrereqsProgrammingTestUpdateInput = {
  applicationId?: number;
  downloadTimestamp?: Date | null;
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
  periodId?: number;
  uploadDatafileinfoId?: number | null;
};
