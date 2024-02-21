import { Application } from "../application/Application";

export type Attendance = {
  status: number;
  application?: Application;
  id: number;
};
