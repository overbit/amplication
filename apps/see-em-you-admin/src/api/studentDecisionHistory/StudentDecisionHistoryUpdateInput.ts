import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type StudentDecisionHistoryUpdateInput = {
  programId?: number | null;
  decision?: string | null;
  deferralSemester?: string | null;
  deferralYear?: string | null;
  application?: ApplicationWhereUniqueInput | null;
};
