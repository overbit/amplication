import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";

export type MhciPrereqsProgrammingSampleUpdateInput = {
  applicationId?: number | null;
  datafileinfoId?: number;
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
  newFileUploaded?: boolean;
  note?: string | null;
  periodId?: number | null;
  programId?: number | null;
  submittedToReviewer?: boolean;
};
