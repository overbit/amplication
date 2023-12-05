import { Application } from "../application/Application";

export type Attendance = {
  application?: Application;
  id: number;
  status: number;
};
