import { EthnicityWhereInput } from "./EthnicityWhereInput";
import { EthnicityOrderByInput } from "./EthnicityOrderByInput";

export type EthnicityFindManyArgs = {
  where?: EthnicityWhereInput;
  orderBy?: Array<EthnicityOrderByInput>;
  skip?: number;
  take?: number;
};
