import { Decimal } from "decimal.js";
import { DomainUnitUpdateManyWithoutUnitsInput } from "./DomainUnitUpdateManyWithoutUnitsInput";

export type UnitUpdateInput = {
  unitName?: string;
  unitNameShort?: string;
  unitDescription?: string | null;
  unitUrl?: string | null;
  unitOracleString?: string | null;
  unitSystemEmail?: string | null;
  unitCcEmail?: string | null;
  applicationBasePrice?: Decimal | null;
  applicationProgramPrice?: Decimal | null;
  parentUnitId?: number | null;
  domainUnit?: DomainUnitUpdateManyWithoutUnitsInput;
};
