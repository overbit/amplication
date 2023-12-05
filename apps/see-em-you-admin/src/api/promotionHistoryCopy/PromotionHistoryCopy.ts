export type PromotionHistoryCopy = {
  applicationId: number;
  id: string;
  programId: number;
  promotion_method?: "default" | "voting" | "promotion" | "demotion";
  round: number;
  statusTime: Date;
  usersId: number | null;
};
