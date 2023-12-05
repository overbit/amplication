import { Application } from "../application/Application";

export type LuApplicationStartSemester = {
  application?: Application;
  id: number;
  semester: string | null;
  year: string | null;
};
