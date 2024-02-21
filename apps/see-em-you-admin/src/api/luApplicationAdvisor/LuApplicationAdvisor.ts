import { Application } from "../application/Application";

export type LuApplicationAdvisor = {
  advisorUserId: number | null;
  advisorType: number;
  name: string | null;
  programId: number | null;
  choice: number | null;
  application?: Application;
  id: number;
};
