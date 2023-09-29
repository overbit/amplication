import { StudentDecisionWhereInput } from "./StudentDecisionWhereInput";
import { StudentDecisionOrderByInput } from "./StudentDecisionOrderByInput";

export type StudentDecisionFindManyArgs = {
  where?: StudentDecisionWhereInput;
  orderBy?: Array<StudentDecisionOrderByInput>;
  skip?: number;
  take?: number;
};
