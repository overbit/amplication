import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const JiraIssueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Jira Issue Id" source="jiraIssueId" />
        <TextField label="Jira Project" source="jiraProject" />
        <TextField label="Jira Id" source="jiraId" />
        <DateField source="created" label="Created" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
