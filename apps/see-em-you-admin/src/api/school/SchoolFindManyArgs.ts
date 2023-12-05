import { SchoolWhereInput } from "./SchoolWhereInput";
import { SchoolOrderByInput } from "./SchoolOrderByInput";

export type SchoolFindManyArgs = {
  where?: SchoolWhereInput;
  orderBy?: Array<SchoolOrderByInput>;
  skip?: number;
  take?: number;
};
