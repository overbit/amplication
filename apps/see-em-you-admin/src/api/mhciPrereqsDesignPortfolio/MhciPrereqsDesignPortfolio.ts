import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";

export type MhciPrereqsDesignPortfolio = {
  url: string | null;
  description: string | null;
  applicationId: number | null;
  programId: number | null;
  periodId: number | null;
  luUsersUsertypes?: LuUsersUsertype;
  id: number;
};
