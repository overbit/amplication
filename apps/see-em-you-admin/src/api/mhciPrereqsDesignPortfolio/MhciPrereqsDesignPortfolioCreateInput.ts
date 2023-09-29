import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";

export type MhciPrereqsDesignPortfolioCreateInput = {
  applicationId?: number | null;
  description?: string | null;
  luUsersUsertypes: LuUsersUsertypeWhereUniqueInput;
  periodId?: number | null;
  programId?: number | null;
  url?: string | null;
};
