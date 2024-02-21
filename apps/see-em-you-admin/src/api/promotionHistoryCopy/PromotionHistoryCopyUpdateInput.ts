export type PromotionHistoryCopyUpdateInput = {
  applicationId?: number;
  programId?: number;
  round?: number;
  promotion_method?: "default" | "voting" | "promotion" | "demotion";
  usersId?: number | null;
};
