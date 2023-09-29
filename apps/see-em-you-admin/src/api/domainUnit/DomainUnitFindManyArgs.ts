import { DomainUnitWhereInput } from "./DomainUnitWhereInput";
import { DomainUnitOrderByInput } from "./DomainUnitOrderByInput";

export type DomainUnitFindManyArgs = {
  where?: DomainUnitWhereInput;
  orderBy?: Array<DomainUnitOrderByInput>;
  skip?: number;
  take?: number;
};
