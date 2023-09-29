import { ApplicationDecisionWhereInput } from "./ApplicationDecisionWhereInput";
import { ApplicationDecisionOrderByInput } from "./ApplicationDecisionOrderByInput";

export type ApplicationDecisionFindManyArgs = {
  where?: ApplicationDecisionWhereInput;
  orderBy?: Array<ApplicationDecisionOrderByInput>;
  skip?: number;
  take?: number;
};
