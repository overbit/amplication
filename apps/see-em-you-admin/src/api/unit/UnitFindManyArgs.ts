import { UnitWhereInput } from "./UnitWhereInput";
import { UnitOrderByInput } from "./UnitOrderByInput";

export type UnitFindManyArgs = {
  where?: UnitWhereInput;
  orderBy?: Array<UnitOrderByInput>;
  skip?: number;
  take?: number;
};
