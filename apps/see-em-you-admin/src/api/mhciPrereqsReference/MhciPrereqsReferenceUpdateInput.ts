export type MhciPrereqsReferenceUpdateInput = {
  applicationId?: number;
  refUserId?: number;
  content?: string | null;
  datafileId?: number | null;
  submitted?: boolean;
  reminderSentCount?: number;
  lastReminderSent?: Date | null;
  anova_knowledge?:
    | "No_knowledge"
    | "Not_confident"
    | "Direct_knowledge"
    | null;
  anovaComment?: string | null;
  regression_knowledge?:
    | "No_knowledge"
    | "Not_confident"
    | "Direct_knowledge"
    | null;
  regressionComment?: string | null;
  periodId?: number | null;
  programId?: number | null;
};
