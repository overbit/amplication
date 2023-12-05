import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationCohortCreateInput = {
  application: ApplicationWhereUniqueInput;
  cohortId: number;
};
