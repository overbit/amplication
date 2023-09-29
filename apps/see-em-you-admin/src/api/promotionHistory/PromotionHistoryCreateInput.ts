import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type PromotionHistoryCreateInput = {
  application: ApplicationWhereUniqueInput;
  programId: number;
  promotion_method: "default" | "voting" | "promotion" | "demotion";
  round: number;
  usersId?: number | null;
};
