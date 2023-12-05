import { StudentDecisionHistoryWhereInput } from "./StudentDecisionHistoryWhereInput";
import { StudentDecisionHistoryOrderByInput } from "./StudentDecisionHistoryOrderByInput";

export type StudentDecisionHistoryFindManyArgs = {
  where?: StudentDecisionHistoryWhereInput;
  orderBy?: Array<StudentDecisionHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
