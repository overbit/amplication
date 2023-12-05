import { Application } from "../application/Application";

export type Experience = {
  address: string | null;
  application?: Application;
  company: string | null;
  datafileId: number | null;
  endDate: string | null;
  experiencetype: number | null;
  id: number;
  jobDescription: string | null;
  jobTitle: string | null;
  orderEntered: number | null;
  startDate: Date | null;
  yearsExp: string | null;
};
