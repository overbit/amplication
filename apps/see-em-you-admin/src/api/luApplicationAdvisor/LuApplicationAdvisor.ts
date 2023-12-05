import { Application } from "../application/Application";

export type LuApplicationAdvisor = {
  advisorType: number;
  advisorUserId: number | null;
  application?: Application;
  choice: number | null;
  id: number;
  name: string | null;
  programId: number | null;
};
