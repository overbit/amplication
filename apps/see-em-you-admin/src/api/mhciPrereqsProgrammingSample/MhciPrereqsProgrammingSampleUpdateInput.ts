import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";

export type MhciPrereqsProgrammingSampleUpdateInput = {
  datafileinfoId?: number;
  note?: string | null;
  submittedToReviewer?: boolean;
  newFileUploaded?: boolean;
  applicationId?: number | null;
  periodId?: number | null;
  programId?: number | null;
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
};
