import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RequestsAccessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="User" source="user" />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
