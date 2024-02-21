import { Application } from "../application/Application";

export type LuApplicationStartSemester = {
  semester: string | null;
  year: string | null;
  application?: Application;
  id: number;
};
