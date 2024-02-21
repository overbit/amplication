import { DomainUnitListRelationFilter } from "../domainUnit/DomainUnitListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type DomainWhereInput = {
  domainUnit?: DomainUnitListRelationFilter;
  id?: IntFilter;
};
