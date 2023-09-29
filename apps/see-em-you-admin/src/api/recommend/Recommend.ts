import { Application } from "../application/Application";

export type Recommend = {
  application?: Application;
  buckleyatupload: number | null;
  cmuAffiliation: number | null;
  content: string | null;
  datafileId: number | null;
  id: number;
  lastReminderSent: Date | null;
  recommendtype: number;
  recUserId: number;
  reminderSentCount: number;
  submitted: boolean;
};
