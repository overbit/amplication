import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type StudentDecisionHistoryCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  decision?: string | null;
  deferralSemester?: string | null;
  deferralYear?: string | null;
  programId?: number | null;
};
