import { Application } from "../application/Application";

export type LuApplicationAppreq = {
  reqId: number;
  lastModified: Date;
  completed: boolean;
  application?: Application;
  id: number;
};
