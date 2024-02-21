import { Decimal } from "decimal.js";
import { DomainUnit } from "../domainUnit/DomainUnit";

export type Unit = {
  unitName: string;
  unitNameShort: string;
  unitDescription: string | null;
  unitUrl: string | null;
  unitOracleString: string | null;
  unitSystemEmail: string | null;
  unitCcEmail: string | null;
  applicationBasePrice: Decimal | null;
  applicationProgramPrice: Decimal | null;
  parentUnitId: number | null;
  domainUnit?: Array<DomainUnit>;
  id: number;
};
