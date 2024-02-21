import { Application } from "../application/Application";

export type Recommend = {
  recUserId: number;
  recommendtype: number;
  content: string | null;
  datafileId: number | null;
  submitted: boolean;
  reminderSentCount: number;
  lastReminderSent: Date | null;
  cmuAffiliation: number | null;
  buckleyatupload: number | null;
  application?: Application;
  id: number;
};
