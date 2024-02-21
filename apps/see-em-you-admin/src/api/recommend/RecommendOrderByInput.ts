import { SortOrder } from "../../util/SortOrder";

export type RecommendOrderByInput = {
  recUserId?: SortOrder;
  recommendtype?: SortOrder;
  content?: SortOrder;
  datafileId?: SortOrder;
  submitted?: SortOrder;
  reminderSentCount?: SortOrder;
  lastReminderSent?: SortOrder;
  cmuAffiliation?: SortOrder;
  buckleyatupload?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
