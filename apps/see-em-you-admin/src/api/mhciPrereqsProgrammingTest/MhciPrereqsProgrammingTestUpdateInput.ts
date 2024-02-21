import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";

export type MhciPrereqsProgrammingTestUpdateInput = {
  downloadTimestamp?: Date | null;
  uploadDatafileinfoId?: number | null;
  applicationId?: number;
  periodId?: number;
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
};
