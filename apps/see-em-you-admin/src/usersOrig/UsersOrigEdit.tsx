import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const UsersOrigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <TextInput label="Username" source="username" />
        <TextInput label="Password" source="password" />
        <TextInput label="Title" source="title" />
        <TextInput label="Firstname" source="firstname" />
        <TextInput label="Middlename" source="middlename" />
        <TextInput label="Lastname" source="lastname" />
        <TextInput label="Initials" source="initials" />
        <DateTimeInput label="Signup Date" source="signupDate" />
        <BooleanInput label="Verified" source="verified" />
        <TextInput label="Guid" source="guid" />
      </SimpleForm>
    </Edit>
  );
};
