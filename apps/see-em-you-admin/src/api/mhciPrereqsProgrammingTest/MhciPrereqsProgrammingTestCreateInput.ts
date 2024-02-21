import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";

export type MhciPrereqsProgrammingTestCreateInput = {
  downloadTimestamp?: Date | null;
  uploadDatafileinfoId?: number | null;
  applicationId: number;
  periodId: number;
  luUsersUsertypes: LuUsersUsertypeWhereUniqueInput;
};
