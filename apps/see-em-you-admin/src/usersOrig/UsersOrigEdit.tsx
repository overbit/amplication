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
        <TextInput label="Firstname" source="firstname" />
        <TextInput label="Guid" source="guid" />
        <TextInput label="Initials" source="initials" />
        <TextInput label="Lastname" source="lastname" />
        <TextInput label="Middlename" source="middlename" />
        <TextInput label="Password" source="password" />
        <DateTimeInput label="Signup Date" source="signupDate" />
        <TextInput label="Title" source="title" />
        <TextInput label="Username" source="username" />
        <BooleanInput label="Verified" source="verified" />
      </SimpleForm>
    </Edit>
  );
};
