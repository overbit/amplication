import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { ApplicationAdminNoteTitle } from "../applicationAdminNote/ApplicationAdminNoteTitle";
import { LuUsersUsertypeTitle } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="applicationAdminNote"
          reference="ApplicationAdminNote"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationAdminNoteTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" />
        <TextInput label="Firstname" source="firstname" />
        <TextInput label="First Name Pref" source="firstNamePref" />
        <TextInput label="Guid" source="guid" />
        <TextInput label="Initials" source="initials" />
        <TextInput label="Lastname" source="lastname" />
        <ReferenceArrayInput
          source="luUsersUsertypes"
          reference="LuUsersUsertype"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LuUsersUsertypeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Middlename" source="middlename" />
        <DateTimeInput label="Signup Date" source="signupDate" />
        <TextInput label="Suffix" source="suffix" />
        <TextInput label="Title" source="title" />
        <BooleanInput label="Verified" source="verified" />
      </SimpleForm>
    </Edit>
  );
};
