export type LangProfRecommendUpdateInput = {
  applicationId?: number;
  recUserId?: number;
  content?: string | null;
  datafileId?: number | null;
  langProfRecId?: number | null;
  submitted?: boolean;
  reminderSentCount?: number;
  lastReminderSent?: Date | null;
  languageSpecialization?: string;
};
