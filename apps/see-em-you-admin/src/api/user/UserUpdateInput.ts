import { ApplicationAdminNoteUpdateManyWithoutUsersInput } from "./ApplicationAdminNoteUpdateManyWithoutUsersInput";
import { LuUsersUsertypeUpdateManyWithoutUsersInput } from "./LuUsersUsertypeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  applicationAdminNote?: ApplicationAdminNoteUpdateManyWithoutUsersInput;
  email?: string;
  firstname?: string;
  firstNamePref?: string | null;
  guid?: string;
  initials?: string | null;
  lastname?: string;
  luUsersUsertypes?: LuUsersUsertypeUpdateManyWithoutUsersInput;
  middlename?: string | null;
  signupDate?: Date;
  suffix?: string | null;
  title?: string | null;
  verified?: boolean;
};
