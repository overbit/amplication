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
        <TextField label="Username" source="username" />
        <TextField label="Password" source="password" />
        <TextField label="Title" source="title" />
        <TextField label="Firstname" source="firstname" />
        <TextField label="Middlename" source="middlename" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Initials" source="initials" />
        <TextField label="Signup Date" source="signupDate" />
        <BooleanField label="Verified" source="verified" />
        <TextField label="Guid" source="guid" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
