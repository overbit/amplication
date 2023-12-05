import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const JiravoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Jira Name" source="jiraName" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Create>
  );
};
