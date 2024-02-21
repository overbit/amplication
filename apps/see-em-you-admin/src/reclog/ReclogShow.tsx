import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ReclogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Ip" source="ip" />
        <TextField label="Message" source="message" />
        <DateField source="created" label="Created" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
