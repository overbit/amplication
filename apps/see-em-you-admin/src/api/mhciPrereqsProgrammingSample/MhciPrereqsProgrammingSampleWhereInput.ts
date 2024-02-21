import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type MhciPrereqsProgrammingSampleWhereInput = {
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
  id?: IntFilter;
};
