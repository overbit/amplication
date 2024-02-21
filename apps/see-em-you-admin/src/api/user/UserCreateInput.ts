import { ApplicationAdminNoteCreateNestedManyWithoutUsersInput } from "./ApplicationAdminNoteCreateNestedManyWithoutUsersInput";
import { LuUsersUsertypeCreateNestedManyWithoutUsersInput } from "./LuUsersUsertypeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email: string;
  title?: string | null;
  firstname: string;
  middlename?: string | null;
  lastname: string;
  suffix?: string | null;
  initials?: string | null;
  signupDate: Date;
  verified: boolean;
  guid: string;
  firstNamePref?: string | null;
  applicationAdminNote?: ApplicationAdminNoteCreateNestedManyWithoutUsersInput;
  luUsersUsertypes?: LuUsersUsertypeCreateNestedManyWithoutUsersInput;
};
