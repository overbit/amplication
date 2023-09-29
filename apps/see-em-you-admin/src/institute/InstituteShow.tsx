import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const InstituteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Hide" source="hide" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Users Id" source="usersId" />
      </SimpleShowLayout>
    </Show>
  );
};
