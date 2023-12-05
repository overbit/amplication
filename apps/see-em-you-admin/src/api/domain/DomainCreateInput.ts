import { DomainUnitCreateNestedManyWithoutDomainsInput } from "./DomainUnitCreateNestedManyWithoutDomainsInput";

export type DomainCreateInput = {
  active: boolean;
  banner: string;
  description?: string | null;
  domainUnit?: DomainUnitCreateNestedManyWithoutDomainsInput;
  name: string;
  path: string;
};
