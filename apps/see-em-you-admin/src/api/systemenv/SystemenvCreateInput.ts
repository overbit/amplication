import { Decimal } from "decimal.js";

export type SystemenvCreateInput = {
  appbaseprice: Decimal;
  coorduserId: number;
  domainId: number;
  expdate: Date;
  expdate2: Date;
  sysemail: string;
};
