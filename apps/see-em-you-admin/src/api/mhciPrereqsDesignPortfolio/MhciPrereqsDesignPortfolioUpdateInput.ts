import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";

export type MhciPrereqsDesignPortfolioUpdateInput = {
  url?: string | null;
  description?: string | null;
  applicationId?: number | null;
  programId?: number | null;
  periodId?: number | null;
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
};
