import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const JiraIssueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="created" label="Created" />
        <TextField label="Id" source="id" />
        <TextField label="Jira Id" source="jiraId" />
        <TextField label="Jira Issue Id" source="jiraIssueId" />
        <TextField label="Jira Project" source="jiraProject" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
