import { Application } from "../application/Application";

export type PromotionHistory = {
  programId: number;
  statusTime: Date;
  round: number;
  promotion_method?: "default" | "voting" | "promotion" | "demotion";
  usersId: number | null;
  application?: Application;
  id: string;
};
