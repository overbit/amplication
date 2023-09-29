import { DomainUnit } from "../domainUnit/DomainUnit";

export type Domain = {
  active: boolean;
  banner: string;
  description: string | null;
  domainUnit?: Array<DomainUnit>;
  id: number;
  name: string;
  path: string;
};
