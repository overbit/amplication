import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RecommendCreateInput = {
  recUserId: number;
  recommendtype: number;
  content?: string | null;
  datafileId?: number | null;
  submitted: boolean;
  reminderSentCount: number;
  lastReminderSent?: Date | null;
  cmuAffiliation?: number | null;
  buckleyatupload?: number | null;
  application: ApplicationWhereUniqueInput;
};
