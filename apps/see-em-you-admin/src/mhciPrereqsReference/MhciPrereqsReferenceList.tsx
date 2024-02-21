import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MhciPrereqsReferenceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqsReferences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Ref User Id" source="refUserId" />
        <TextField label="Content" source="content" />
        <TextField label="Datafile Id" source="datafileId" />
        <BooleanField label="Submitted" source="submitted" />
        <TextField label="Reminder Sent Count" source="reminderSentCount" />
        <TextField label="Last Reminder Sent" source="lastReminderSent" />
        <TextField label="Anova Knowledge" source="anova_knowledge" />
        <TextField label="Anova Comment" source="anovaComment" />
        <TextField label="Regression Knowledge" source="regression_knowledge" />
        <TextField label="Regression Comment" source="regressionComment" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
