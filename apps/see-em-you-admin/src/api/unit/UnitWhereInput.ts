import { DomainUnitListRelationFilter } from "../domainUnit/DomainUnitListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type UnitWhereInput = {
  domainUnit?: DomainUnitListRelationFilter;
  id?: IntFilter;
};
