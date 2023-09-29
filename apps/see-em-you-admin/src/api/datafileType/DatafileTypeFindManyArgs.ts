import { DatafileTypeWhereInput } from "./DatafileTypeWhereInput";
import { DatafileTypeOrderByInput } from "./DatafileTypeOrderByInput";

export type DatafileTypeFindManyArgs = {
  where?: DatafileTypeWhereInput;
  orderBy?: Array<DatafileTypeOrderByInput>;
  skip?: number;
  take?: number;
};
