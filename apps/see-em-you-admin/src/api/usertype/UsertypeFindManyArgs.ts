import { UsertypeWhereInput } from "./UsertypeWhereInput";
import { UsertypeOrderByInput } from "./UsertypeOrderByInput";

export type UsertypeFindManyArgs = {
  where?: UsertypeWhereInput;
  orderBy?: Array<UsertypeOrderByInput>;
  skip?: number;
  take?: number;
};
