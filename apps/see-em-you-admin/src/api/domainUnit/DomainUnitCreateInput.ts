import { DomainWhereUniqueInput } from "../domain/DomainWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type DomainUnitCreateInput = {
  domain: DomainWhereUniqueInput;
  unit: UnitWhereUniqueInput;
};
