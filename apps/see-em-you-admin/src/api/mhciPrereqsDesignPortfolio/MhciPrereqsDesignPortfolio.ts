import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";

export type MhciPrereqsDesignPortfolio = {
  applicationId: number | null;
  description: string | null;
  id: number;
  luUsersUsertypes?: LuUsersUsertype;
  periodId: number | null;
  programId: number | null;
  url: string | null;
};
