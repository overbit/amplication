import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type StudentDecisionHistoryCreateInput = {
  programId?: number | null;
  decision?: string | null;
  deferralSemester?: string | null;
  deferralYear?: string | null;
  application?: ApplicationWhereUniqueInput | null;
};
