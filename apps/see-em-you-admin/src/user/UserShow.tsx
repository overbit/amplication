import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  DateField,
  ReferenceField,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { MHCIPREREQSPROGRAMMINGSAMPLE_TITLE_FIELD } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Email" source="email" />
        <TextField label="Title" source="title" />
        <TextField label="Firstname" source="firstname" />
        <TextField label="Middlename" source="middlename" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Suffix" source="suffix" />
        <TextField label="Initials" source="initials" />
        <TextField label="Signup Date" source="signupDate" />
        <BooleanField label="Verified" source="verified" />
        <TextField label="Guid" source="guid" />
        <TextField label="First Name Pref" source="firstNamePref" />
        <TextField label="Id" source="id" />
        <ReferenceManyField
          reference="ApplicationAdminNote"
          target="insert_user_id"
          label="ApplicationAdminNotes"
        >
          <Datagrid rowClick="show">
            <DateField source="insertTime" label="Insert Time" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LuUsersUsertype"
          target="user_id"
          label="LuUsersUsertypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Usertype Id" source="usertypeId" />
            <TextField label="Domain" source="domain" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Mhci Prereqs Programming Samples"
              source="mhciprereqsprogrammingsample.id"
              reference="MhciPrereqsProgrammingSample"
            >
              <TextField source={MHCIPREREQSPROGRAMMINGSAMPLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
