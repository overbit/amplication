import { ApplicationAdminNoteListRelationFilter } from "../applicationAdminNote/ApplicationAdminNoteListRelationFilter";
import { LuUsersUsertypeListRelationFilter } from "../luUsersUsertype/LuUsersUsertypeListRelationFilter";

export type UserWhereInput = {
  applicationAdminNote?: ApplicationAdminNoteListRelationFilter;
  luUsersUsertypes?: LuUsersUsertypeListRelationFilter;
};
