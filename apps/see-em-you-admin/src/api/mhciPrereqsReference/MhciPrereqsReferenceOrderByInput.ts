import { SortOrder } from "../../util/SortOrder";

export type MhciPrereqsReferenceOrderByInput = {
  applicationId?: SortOrder;
  refUserId?: SortOrder;
  content?: SortOrder;
  datafileId?: SortOrder;
  submitted?: SortOrder;
  reminderSentCount?: SortOrder;
  lastReminderSent?: SortOrder;
  anova_knowledge?: SortOrder;
  anovaComment?: SortOrder;
  regression_knowledge?: SortOrder;
  regressionComment?: SortOrder;
  periodId?: SortOrder;
  programId?: SortOrder;
  id?: SortOrder;
};
