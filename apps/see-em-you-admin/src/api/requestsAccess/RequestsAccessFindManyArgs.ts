import { RequestsAccessWhereInput } from "./RequestsAccessWhereInput";
import { RequestsAccessOrderByInput } from "./RequestsAccessOrderByInput";

export type RequestsAccessFindManyArgs = {
  where?: RequestsAccessWhereInput;
  orderBy?: Array<RequestsAccessOrderByInput>;
  skip?: number;
  take?: number;
};
