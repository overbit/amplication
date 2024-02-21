import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type MhciPrereqsDesignPortfolioWhereInput = {
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
  id?: IntFilter;
};
