import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const JiraIssueCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Jira Id" source="jiraId" />
        <NumberInput step={1} label="Jira Issue Id" source="jiraIssueId" />
        <TextInput label="Jira Project" source="jiraProject" />
      </SimpleForm>
    </Create>
  );
};
