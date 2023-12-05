import { ErrorlogWhereInput } from "./ErrorlogWhereInput";
import { ErrorlogOrderByInput } from "./ErrorlogOrderByInput";

export type ErrorlogFindManyArgs = {
  where?: ErrorlogWhereInput;
  orderBy?: Array<ErrorlogOrderByInput>;
  skip?: number;
  take?: number;
};
