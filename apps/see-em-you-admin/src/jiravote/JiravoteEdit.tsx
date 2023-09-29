import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const JiravoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Jira Name" source="jiraName" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Edit>
  );
};
