import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";
import { MhciPrereqsCourseDatafileListRelationFilter } from "../mhciPrereqsCourseDatafile/MhciPrereqsCourseDatafileListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type MhciPrereqsCourseWhereInput = {
  application?: ApplicationWhereUniqueInput;
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
  mhciPrereqsCourseDatafiles?: MhciPrereqsCourseDatafileListRelationFilter;
  id?: IntFilter;
};
