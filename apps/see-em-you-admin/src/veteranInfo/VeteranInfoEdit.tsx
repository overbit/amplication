import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const VeteranInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="User Id" source="userId" />
        <TextInput label="Status" source="status" />
        <TextInput label="Status Enroll" source="statusEnroll" />
        <TextInput label="Branch" source="branch" />
        <DateTimeInput label="Startdate" source="startdate" />
        <DateTimeInput label="Enddate" source="enddate" />
        <TextInput label="Discharge" source="discharge" />
      </SimpleForm>
    </Edit>
  );
};
