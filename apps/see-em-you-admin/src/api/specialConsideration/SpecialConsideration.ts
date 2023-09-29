import { Application } from "../application/Application";

export type SpecialConsideration = {
  application?: Application;
  id: string;
  reviewerId: number;
  specialConsideration: number;
};
