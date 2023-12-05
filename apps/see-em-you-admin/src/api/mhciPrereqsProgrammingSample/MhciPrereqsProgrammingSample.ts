import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";

export type MhciPrereqsProgrammingSample = {
  applicationId: number | null;
  datafileinfoId: number;
  id: number;
  luUsersUsertypes?: LuUsersUsertype;
  newFileUploaded: boolean;
  note: string | null;
  periodId: number | null;
  programId: number | null;
  submittedToReviewer: boolean;
};
