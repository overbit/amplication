import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type FellowshipCreateInput = {
  name?: string | null;
  amount?: string | null;
  status?: string | null;
  appliedDate?: Date | null;
  awardDate?: Date | null;
  duration?: number | null;
  datafileId?: number | null;
  short?: number | null;
  application: ApplicationWhereUniqueInput;
};
