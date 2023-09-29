import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type StudentDecisionHistoryUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  decision?: string | null;
  deferralSemester?: string | null;
  deferralYear?: string | null;
  programId?: number | null;
};
