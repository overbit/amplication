import { DomainUnitUpdateManyWithoutDomainsInput } from "./DomainUnitUpdateManyWithoutDomainsInput";

export type DomainUpdateInput = {
  name?: string;
  description?: string | null;
  path?: string;
  active?: boolean;
  banner?: string;
  domainUnit?: DomainUnitUpdateManyWithoutDomainsInput;
};
