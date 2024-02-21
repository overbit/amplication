import { ApplicationAdminNoteListRelationFilter } from "../applicationAdminNote/ApplicationAdminNoteListRelationFilter";
import { LuUsersUsertypeListRelationFilter } from "../luUsersUsertype/LuUsersUsertypeListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type UserWhereInput = {
  applicationAdminNote?: ApplicationAdminNoteListRelationFilter;
  luUsersUsertypes?: LuUsersUsertypeListRelationFilter;
  id?: IntFilter;
};
