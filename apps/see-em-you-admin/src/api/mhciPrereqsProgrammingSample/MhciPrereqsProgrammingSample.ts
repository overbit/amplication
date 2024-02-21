import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";

export type MhciPrereqsProgrammingSample = {
  datafileinfoId: number;
  note: string | null;
  submittedToReviewer: boolean;
  newFileUploaded: boolean;
  applicationId: number | null;
  periodId: number | null;
  programId: number | null;
  luUsersUsertypes?: LuUsersUsertype;
  id: number;
};
