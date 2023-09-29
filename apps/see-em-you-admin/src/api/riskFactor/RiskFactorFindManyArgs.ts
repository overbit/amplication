import { RiskFactorWhereInput } from "./RiskFactorWhereInput";
import { RiskFactorOrderByInput } from "./RiskFactorOrderByInput";

export type RiskFactorFindManyArgs = {
  where?: RiskFactorWhereInput;
  orderBy?: Array<RiskFactorOrderByInput>;
  skip?: number;
  take?: number;
};
