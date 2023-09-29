export type LangProfRecommendUpdateInput = {
  applicationId?: number;
  content?: string | null;
  datafileId?: number | null;
  langProfRecId?: number | null;
  languageSpecialization?: string;
  lastReminderSent?: Date | null;
  recUserId?: number;
  reminderSentCount?: number;
  submitted?: boolean;
};
