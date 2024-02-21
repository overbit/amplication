import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type PromotionHistoryUpdateInput = {
  programId?: number;
  round?: number;
  promotion_method?: "default" | "voting" | "promotion" | "demotion";
  usersId?: number | null;
  application?: ApplicationWhereUniqueInput;
};
