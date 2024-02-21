import { ApplicationAdminNote } from "../applicationAdminNote/ApplicationAdminNote";
import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";

export type User = {
  email: string;
  title: string | null;
  firstname: string;
  middlename: string | null;
  lastname: string;
  suffix: string | null;
  initials: string | null;
  signupDate: Date;
  verified: boolean;
  guid: string;
  firstNamePref: string | null;
  applicationAdminNote?: Array<ApplicationAdminNote>;
  luUsersUsertypes?: Array<LuUsersUsertype>;
  id: number;
};
