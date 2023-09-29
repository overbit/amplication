import { DomainWhereUniqueInput } from "../domain/DomainWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type DomainUnitWhereInput = {
  domain?: DomainWhereUniqueInput;
  unit?: UnitWhereUniqueInput;
};
