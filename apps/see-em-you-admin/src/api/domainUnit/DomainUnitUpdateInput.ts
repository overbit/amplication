import { DomainWhereUniqueInput } from "../domain/DomainWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type DomainUnitUpdateInput = {
  domain?: DomainWhereUniqueInput;
  unit?: UnitWhereUniqueInput;
};
