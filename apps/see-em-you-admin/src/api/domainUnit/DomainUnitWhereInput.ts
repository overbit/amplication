import { DomainWhereUniqueInput } from "../domain/DomainWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DomainUnitWhereInput = {
  domain?: DomainWhereUniqueInput;
  unit?: UnitWhereUniqueInput;
  id?: StringFilter;
};
