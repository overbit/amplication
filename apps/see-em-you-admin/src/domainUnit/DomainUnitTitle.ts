import { DomainUnit as TDomainUnit } from "../api/domainUnit/DomainUnit";

export const DOMAINUNIT_TITLE_FIELD = "id";

export const DomainUnitTitle = (record: TDomainUnit): string => {
  return record.id?.toString() || String(record.id);
};
