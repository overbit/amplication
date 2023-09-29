import { Application } from "../application/Application";

export type LuApplicationAppreq = {
  application?: Application;
  completed: boolean;
  id: number;
  lastModified: Date;
  reqId: number;
};
