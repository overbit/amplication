import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const JiravoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="created" label="Created" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Jira Name" source="jiraName" />
        <TextField label="User" source="user" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
