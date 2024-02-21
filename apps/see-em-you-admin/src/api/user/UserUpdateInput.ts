import { ApplicationAdminNoteUpdateManyWithoutUsersInput } from "./ApplicationAdminNoteUpdateManyWithoutUsersInput";
import { LuUsersUsertypeUpdateManyWithoutUsersInput } from "./LuUsersUsertypeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string;
  title?: string | null;
  firstname?: string;
  middlename?: string | null;
  lastname?: string;
  suffix?: string | null;
  initials?: string | null;
  signupDate?: Date;
  verified?: boolean;
  guid?: string;
  firstNamePref?: string | null;
  applicationAdminNote?: ApplicationAdminNoteUpdateManyWithoutUsersInput;
  luUsersUsertypes?: LuUsersUsertypeUpdateManyWithoutUsersInput;
};
