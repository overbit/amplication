import { Decimal } from "decimal.js";
import { DomainUnitCreateNestedManyWithoutUnitsInput } from "./DomainUnitCreateNestedManyWithoutUnitsInput";

export type UnitCreateInput = {
  unitName: string;
  unitNameShort: string;
  unitDescription?: string | null;
  unitUrl?: string | null;
  unitOracleString?: string | null;
  unitSystemEmail?: string | null;
  unitCcEmail?: string | null;
  applicationBasePrice?: Decimal | null;
  applicationProgramPrice?: Decimal | null;
  parentUnitId?: number | null;
  domainUnit?: DomainUnitCreateNestedManyWithoutUnitsInput;
};
