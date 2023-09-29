export type LangProfRecommend = {
  applicationId: number;
  content: string | null;
  datafileId: number | null;
  id: number;
  langProfRecId: number | null;
  languageSpecialization: string;
  lastReminderSent: Date | null;
  recUserId: number;
  reminderSentCount: number;
  submitted: boolean;
};
