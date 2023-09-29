import { ApplicationPeriodWhereInput } from "./ApplicationPeriodWhereInput";
import { ApplicationPeriodOrderByInput } from "./ApplicationPeriodOrderByInput";

export type ApplicationPeriodFindManyArgs = {
  where?: ApplicationPeriodWhereInput;
  orderBy?: Array<ApplicationPeriodOrderByInput>;
  skip?: number;
  take?: number;
};
