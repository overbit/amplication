export type PromotionHistoryCopy = {
  applicationId: number;
  programId: number;
  statusTime: Date;
  round: number;
  promotion_method?: "default" | "voting" | "promotion" | "demotion";
  usersId: number | null;
  id: string;
};
