import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const RequestsAccessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Id" source="id" />
        <TextField label="User" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};
