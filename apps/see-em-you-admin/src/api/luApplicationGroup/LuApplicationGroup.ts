import { Application } from "../application/Application";

export type LuApplicationGroup = {
  groupId: number;
  round: number;
  application?: Application;
  id: number;
};
