import { Decimal } from "decimal.js";
import { DomainUnitUpdateManyWithoutUnitsInput } from "./DomainUnitUpdateManyWithoutUnitsInput";

export type UnitUpdateInput = {
  applicationBasePrice?: Decimal | null;
  applicationProgramPrice?: Decimal | null;
  domainUnit?: DomainUnitUpdateManyWithoutUnitsInput;
  parentUnitId?: number | null;
  unitCcEmail?: string | null;
  unitDescription?: string | null;
  unitName?: string;
  unitNameShort?: string;
  unitOracleString?: string | null;
  unitSystemEmail?: string | null;
  unitUrl?: string | null;
};
