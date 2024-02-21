import { Application } from "../application/Application";

export type SpecialConsideration = {
  reviewerId: number;
  specialConsideration: number;
  application?: Application;
  id: string;
};
