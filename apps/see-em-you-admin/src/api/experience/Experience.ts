import { Application } from "../application/Application";

export type Experience = {
  datafileId: number | null;
  experiencetype: number | null;
  orderEntered: number | null;
  company: string | null;
  startDate: Date | null;
  endDate: string | null;
  yearsExp: string | null;
  address: string | null;
  jobTitle: string | null;
  jobDescription: string | null;
  application?: Application;
  id: number;
};
