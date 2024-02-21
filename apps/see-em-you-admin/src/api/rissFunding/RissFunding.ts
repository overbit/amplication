import { Application } from "../application/Application";

export type RissFunding = {
  externalFunding: boolean;
  externalSource: string | null;
  externalAmount: string | null;
  reuScholarship: boolean;
  directFunding: boolean;
  application?: Application;
  id: number;
};
