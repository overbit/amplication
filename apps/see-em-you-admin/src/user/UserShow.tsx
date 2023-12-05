import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  DateField,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { MHCIPREREQSPROGRAMMINGSAMPLE_TITLE_FIELD } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Email" source="email" />
        <TextField label="Firstname" source="firstname" />
        <TextField label="First Name Pref" source="firstNamePref" />
        <TextField label="Guid" source="guid" />
        <TextField label="Id" source="id" />
        <TextField label="Initials" source="initials" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Middlename" source="middlename" />
        <TextField label="Signup Date" source="signupDate" />
        <TextField label="Suffix" source="suffix" />
        <TextField label="Title" source="title" />
        <BooleanField label="Verified" source="verified" />
        <ReferenceManyField
          reference="ApplicationAdminNote"
          target="insert_user_id"
          label="ApplicationAdminNotes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <DateField source="insertTime" label="Insert Time" />
            <TextField label="Note" source="note" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LuUsersUsertype"
          target="user_id"
          label="LuUsersUsertypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Domain" source="domain" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Mhci Prereqs Programming Samples"
              source="mhciprereqsprogrammingsample.id"
              reference="MhciPrereqsProgrammingSample"
            >
              <TextField source={MHCIPREREQSPROGRAMMINGSAMPLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Usertype Id" source="usertypeId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
