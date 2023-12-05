import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const UsersOrigShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Email" source="email" />
        <TextField label="Firstname" source="firstname" />
        <TextField label="Guid" source="guid" />
        <TextField label="Id" source="id" />
        <TextField label="Initials" source="initials" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Middlename" source="middlename" />
        <TextField label="Password" source="password" />
        <TextField label="Signup Date" source="signupDate" />
        <TextField label="Title" source="title" />
        <TextField label="Username" source="username" />
        <BooleanField label="Verified" source="verified" />
      </SimpleShowLayout>
    </Show>
  );
};
