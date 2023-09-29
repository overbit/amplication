import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const MhciPrereqsReferenceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Anova Comment" source="anovaComment" />
        <TextField label="Anova Knowledge" source="anova_knowledge" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Content" source="content" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Id" source="id" />
        <TextField label="Last Reminder Sent" source="lastReminderSent" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Ref User Id" source="refUserId" />
        <TextField label="Regression Comment" source="regressionComment" />
        <TextField label="Regression Knowledge" source="regression_knowledge" />
        <TextField label="Reminder Sent Count" source="reminderSentCount" />
        <BooleanField label="Submitted" source="submitted" />
      </SimpleShowLayout>
    </Show>
  );
};
