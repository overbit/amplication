import { ApplicationAdminNoteCreateNestedManyWithoutUsersInput } from "./ApplicationAdminNoteCreateNestedManyWithoutUsersInput";
import { LuUsersUsertypeCreateNestedManyWithoutUsersInput } from "./LuUsersUsertypeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  applicationAdminNote?: ApplicationAdminNoteCreateNestedManyWithoutUsersInput;
  email: string;
  firstname: string;
  firstNamePref?: string | null;
  guid: string;
  initials?: string | null;
  lastname: string;
  luUsersUsertypes?: LuUsersUsertypeCreateNestedManyWithoutUsersInput;
  middlename?: string | null;
  signupDate: Date;
  suffix?: string | null;
  title?: string | null;
  verified: boolean;
};
