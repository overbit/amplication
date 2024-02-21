import { DomainUnit } from "../domainUnit/DomainUnit";

export type Domain = {
  name: string;
  description: string | null;
  path: string;
  active: boolean;
  banner: string;
  domainUnit?: Array<DomainUnit>;
  id: number;
};
