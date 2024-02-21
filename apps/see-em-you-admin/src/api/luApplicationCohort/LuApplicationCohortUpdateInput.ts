import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationCohortUpdateInput = {
  cohortId?: number;
  application?: ApplicationWhereUniqueInput;
};
