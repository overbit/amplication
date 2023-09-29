import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RecommendUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  buckleyatupload?: number | null;
  cmuAffiliation?: number | null;
  content?: string | null;
  datafileId?: number | null;
  lastReminderSent?: Date | null;
  recommendtype?: number;
  recUserId?: number;
  reminderSentCount?: number;
  submitted?: boolean;
};
