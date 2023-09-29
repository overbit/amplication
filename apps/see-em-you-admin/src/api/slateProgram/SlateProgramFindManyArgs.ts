import { SlateProgramWhereInput } from "./SlateProgramWhereInput";
import { SlateProgramOrderByInput } from "./SlateProgramOrderByInput";

export type SlateProgramFindManyArgs = {
  where?: SlateProgramWhereInput;
  orderBy?: Array<SlateProgramOrderByInput>;
  skip?: number;
  take?: number;
};
