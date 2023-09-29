import { UsersInfoWhereInput } from "./UsersInfoWhereInput";
import { UsersInfoOrderByInput } from "./UsersInfoOrderByInput";

export type UsersInfoFindManyArgs = {
  where?: UsersInfoWhereInput;
  orderBy?: Array<UsersInfoOrderByInput>;
  skip?: number;
  take?: number;
};
