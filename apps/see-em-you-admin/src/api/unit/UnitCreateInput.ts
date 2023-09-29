import { Decimal } from "decimal.js";
import { DomainUnitCreateNestedManyWithoutUnitsInput } from "./DomainUnitCreateNestedManyWithoutUnitsInput";

export type UnitCreateInput = {
  applicationBasePrice?: Decimal | null;
  applicationProgramPrice?: Decimal | null;
  domainUnit?: DomainUnitCreateNestedManyWithoutUnitsInput;
  parentUnitId?: number | null;
  unitCcEmail?: string | null;
  unitDescription?: string | null;
  unitName: string;
  unitNameShort: string;
  unitOracleString?: string | null;
  unitSystemEmail?: string | null;
  unitUrl?: string | null;
};
