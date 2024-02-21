import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RecommendUpdateInput = {
  recUserId?: number;
  recommendtype?: number;
  content?: string | null;
  datafileId?: number | null;
  submitted?: boolean;
  reminderSentCount?: number;
  lastReminderSent?: Date | null;
  cmuAffiliation?: number | null;
  buckleyatupload?: number | null;
  application?: ApplicationWhereUniqueInput;
};
