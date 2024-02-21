import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationCohortCreateInput = {
  cohortId: number;
  application: ApplicationWhereUniqueInput;
};
