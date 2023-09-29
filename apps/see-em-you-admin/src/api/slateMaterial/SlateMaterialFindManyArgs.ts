import { SlateMaterialWhereInput } from "./SlateMaterialWhereInput";
import { SlateMaterialOrderByInput } from "./SlateMaterialOrderByInput";

export type SlateMaterialFindManyArgs = {
  where?: SlateMaterialWhereInput;
  orderBy?: Array<SlateMaterialOrderByInput>;
  skip?: number;
  take?: number;
};
