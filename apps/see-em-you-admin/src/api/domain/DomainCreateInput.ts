import { DomainUnitCreateNestedManyWithoutDomainsInput } from "./DomainUnitCreateNestedManyWithoutDomainsInput";

export type DomainCreateInput = {
  name: string;
  description?: string | null;
  path: string;
  active: boolean;
  banner: string;
  domainUnit?: DomainUnitCreateNestedManyWithoutDomainsInput;
};
