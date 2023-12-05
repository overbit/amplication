import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const VeteranInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Branch" source="branch" />
        <TextInput label="Discharge" source="discharge" />
        <DateTimeInput label="Enddate" source="enddate" />
        <DateTimeInput label="Startdate" source="startdate" />
        <TextInput label="Status" source="status" />
        <TextInput label="Status Enroll" source="statusEnroll" />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
