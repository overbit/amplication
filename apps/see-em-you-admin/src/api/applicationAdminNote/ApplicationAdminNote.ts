import { Application } from "../application/Application";
import { User } from "../user/User";

export type ApplicationAdminNote = {
  insertTime: Date;
  note: string;
  application?: Application;
  users?: User;
  id: number;
};
