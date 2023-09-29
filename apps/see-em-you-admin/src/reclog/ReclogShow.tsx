import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ReclogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="created" label="Created" />
        <TextField label="Id" source="id" />
        <TextField label="Ip" source="ip" />
        <TextField label="Message" source="message" />
      </SimpleShowLayout>
    </Show>
  );
};
