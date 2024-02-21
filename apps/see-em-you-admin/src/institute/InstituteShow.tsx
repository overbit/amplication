import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const InstituteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <TextField label="Users Id" source="usersId" />
        <BooleanField label="Hide" source="hide" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
