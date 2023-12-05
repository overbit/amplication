import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const JiraIssueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Jira Id" source="jiraId" />
        <NumberInput step={1} label="Jira Issue Id" source="jiraIssueId" />
        <TextInput label="Jira Project" source="jiraProject" />
      </SimpleForm>
    </Edit>
  );
};
