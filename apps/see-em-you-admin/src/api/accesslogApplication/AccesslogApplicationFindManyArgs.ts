import { AccesslogApplicationWhereInput } from "./AccesslogApplicationWhereInput";
import { AccesslogApplicationOrderByInput } from "./AccesslogApplicationOrderByInput";

export type AccesslogApplicationFindManyArgs = {
  where?: AccesslogApplicationWhereInput;
  orderBy?: Array<AccesslogApplicationOrderByInput>;
  skip?: number;
  take?: number;
};
