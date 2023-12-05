import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationCohortUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  cohortId?: number;
};
