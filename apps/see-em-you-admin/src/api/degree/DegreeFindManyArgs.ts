import { DegreeWhereInput } from "./DegreeWhereInput";
import { DegreeOrderByInput } from "./DegreeOrderByInput";

export type DegreeFindManyArgs = {
  where?: DegreeWhereInput;
  orderBy?: Array<DegreeOrderByInput>;
  skip?: number;
  take?: number;
};
