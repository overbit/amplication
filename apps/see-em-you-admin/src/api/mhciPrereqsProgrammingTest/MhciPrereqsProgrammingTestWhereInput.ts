import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type MhciPrereqsProgrammingTestWhereInput = {
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
  id?: IntFilter;
};
