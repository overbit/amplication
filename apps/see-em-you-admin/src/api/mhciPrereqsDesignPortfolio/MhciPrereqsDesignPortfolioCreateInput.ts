import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";

export type MhciPrereqsDesignPortfolioCreateInput = {
  url?: string | null;
  description?: string | null;
  applicationId?: number | null;
  programId?: number | null;
  periodId?: number | null;
  luUsersUsertypes: LuUsersUsertypeWhereUniqueInput;
};
