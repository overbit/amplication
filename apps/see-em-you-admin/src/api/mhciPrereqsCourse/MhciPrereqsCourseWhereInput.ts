import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";
import { MhciPrereqsCourseDatafileListRelationFilter } from "../mhciPrereqsCourseDatafile/MhciPrereqsCourseDatafileListRelationFilter";

export type MhciPrereqsCourseWhereInput = {
  application?: ApplicationWhereUniqueInput;
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
  mhciPrereqsCourseDatafiles?: MhciPrereqsCourseDatafileListRelationFilter;
};
