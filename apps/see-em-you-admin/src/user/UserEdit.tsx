import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ApplicationAdminNoteTitle } from "../applicationAdminNote/ApplicationAdminNoteTitle";
import { LuUsersUsertypeTitle } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <TextInput label="Title" source="title" />
        <TextInput label="Firstname" source="firstname" />
        <TextInput label="Middlename" source="middlename" />
        <TextInput label="Lastname" source="lastname" />
        <TextInput label="Suffix" source="suffix" />
        <TextInput label="Initials" source="initials" />
        <DateTimeInput label="Signup Date" source="signupDate" />
        <BooleanInput label="Verified" source="verified" />
        <TextInput label="Guid" source="guid" />
        <TextInput label="First Name Pref" source="firstNamePref" />
        <ReferenceArrayInput
          source="applicationAdminNote"
          reference="ApplicationAdminNote"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationAdminNoteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="luUsersUsertypes"
          reference="LuUsersUsertype"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LuUsersUsertypeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
