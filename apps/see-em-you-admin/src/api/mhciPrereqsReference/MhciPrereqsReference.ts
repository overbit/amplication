export type MhciPrereqsReference = {
  anovaComment: string | null;
  anova_knowledge?:
    | "No_knowledge"
    | "Not_confident"
    | "Direct_knowledge"
    | null;
  applicationId: number;
  content: string | null;
  datafileId: number | null;
  id: number;
  lastReminderSent: Date | null;
  periodId: number | null;
  programId: number | null;
  refUserId: number;
  regressionComment: string | null;
  regression_knowledge?:
    | "No_knowledge"
    | "Not_confident"
    | "Direct_knowledge"
    | null;
  reminderSentCount: number;
  submitted: boolean;
};
