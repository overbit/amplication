import { AccesslogWhereInput } from "./AccesslogWhereInput";
import { AccesslogOrderByInput } from "./AccesslogOrderByInput";

export type AccesslogFindManyArgs = {
  where?: AccesslogWhereInput;
  orderBy?: Array<AccesslogOrderByInput>;
  skip?: number;
  take?: number;
};
