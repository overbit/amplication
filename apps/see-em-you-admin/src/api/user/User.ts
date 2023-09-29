import { ApplicationAdminNote } from "../applicationAdminNote/ApplicationAdminNote";
import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";

export type User = {
  applicationAdminNote?: Array<ApplicationAdminNote>;
  email: string;
  firstname: string;
  firstNamePref: string | null;
  guid: string;
  id: number;
  initials: string | null;
  lastname: string;
  luUsersUsertypes?: Array<LuUsersUsertype>;
  middlename: string | null;
  signupDate: Date;
  suffix: string | null;
  title: string | null;
  verified: boolean;
};
