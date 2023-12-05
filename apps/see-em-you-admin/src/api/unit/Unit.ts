import { Decimal } from "decimal.js";
import { DomainUnit } from "../domainUnit/DomainUnit";

export type Unit = {
  applicationBasePrice: Decimal | null;
  applicationProgramPrice: Decimal | null;
  domainUnit?: Array<DomainUnit>;
  id: number;
  parentUnitId: number | null;
  unitCcEmail: string | null;
  unitDescription: string | null;
  unitName: string;
  unitNameShort: string;
  unitOracleString: string | null;
  unitSystemEmail: string | null;
  unitUrl: string | null;
};
