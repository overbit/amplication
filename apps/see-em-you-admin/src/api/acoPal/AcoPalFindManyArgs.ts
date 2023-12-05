import { AcoPalWhereInput } from "./AcoPalWhereInput";
import { AcoPalOrderByInput } from "./AcoPalOrderByInput";

export type AcoPalFindManyArgs = {
  where?: AcoPalWhereInput;
  orderBy?: Array<AcoPalOrderByInput>;
  skip?: number;
  take?: number;
};
