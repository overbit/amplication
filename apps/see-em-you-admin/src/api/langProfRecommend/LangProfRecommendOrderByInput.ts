import { SortOrder } from "../../util/SortOrder";

export type LangProfRecommendOrderByInput = {
  applicationId?: SortOrder;
  recUserId?: SortOrder;
  content?: SortOrder;
  datafileId?: SortOrder;
  langProfRecId?: SortOrder;
  submitted?: SortOrder;
  reminderSentCount?: SortOrder;
  lastReminderSent?: SortOrder;
  languageSpecialization?: SortOrder;
  id?: SortOrder;
};
