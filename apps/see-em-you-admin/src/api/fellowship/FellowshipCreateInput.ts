import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type FellowshipCreateInput = {
  amount?: string | null;
  application: ApplicationWhereUniqueInput;
  appliedDate?: Date | null;
  awardDate?: Date | null;
  datafileId?: number | null;
  duration?: number | null;
  name?: string | null;
  short?: number | null;
  status?: string | null;
};
