import { Application } from "../application/Application";

export type RissFunding = {
  application?: Application;
  directFunding: boolean;
  externalAmount: string | null;
  externalFunding: boolean;
  externalSource: string | null;
  id: number;
  reuScholarship: boolean;
};
