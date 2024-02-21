import { Decimal } from "decimal.js";

export type SystemenvUpdateInput = {
  domainId?: number;
  coorduserId?: number;
  expdate?: Date;
  expdate2?: Date;
  appbaseprice?: Decimal;
  sysemail?: string;
};
