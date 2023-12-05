import { DomainUnitUpdateManyWithoutDomainsInput } from "./DomainUnitUpdateManyWithoutDomainsInput";

export type DomainUpdateInput = {
  active?: boolean;
  banner?: string;
  description?: string | null;
  domainUnit?: DomainUnitUpdateManyWithoutDomainsInput;
  name?: string;
  path?: string;
};
