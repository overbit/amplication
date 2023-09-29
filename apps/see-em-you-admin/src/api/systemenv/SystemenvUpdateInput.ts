import { Decimal } from "decimal.js";

export type SystemenvUpdateInput = {
  appbaseprice?: Decimal;
  coorduserId?: number;
  domainId?: number;
  expdate?: Date;
  expdate2?: Date;
  sysemail?: string;
};
