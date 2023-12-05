import { SortOrder } from "../../util/SortOrder";

export type LangProfRecommendOrderByInput = {
  applicationId?: SortOrder;
  content?: SortOrder;
  datafileId?: SortOrder;
  id?: SortOrder;
  langProfRecId?: SortOrder;
  languageSpecialization?: SortOrder;
  lastReminderSent?: SortOrder;
  recUserId?: SortOrder;
  reminderSentCount?: SortOrder;
  submitted?: SortOrder;
};
