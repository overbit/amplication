import { Application } from "../application/Application";

export type PromotionHistory = {
  application?: Application;
  id: string;
  programId: number;
  promotion_method?: "default" | "voting" | "promotion" | "demotion";
  round: number;
  statusTime: Date;
  usersId: number | null;
};
