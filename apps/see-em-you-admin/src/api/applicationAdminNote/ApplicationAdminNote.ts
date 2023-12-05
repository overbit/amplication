import { Application } from "../application/Application";
import { User } from "../user/User";

export type ApplicationAdminNote = {
  application?: Application;
  id: number;
  insertTime: Date;
  note: string;
  users?: User;
};
