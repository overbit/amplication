import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const VeteranInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Branch" source="branch" />
        <TextInput label="Discharge" source="discharge" />
        <DateTimeInput label="Enddate" source="enddate" />
        <DateTimeInput label="Startdate" source="startdate" />
        <TextInput label="Status" source="status" />
        <TextInput label="Status Enroll" source="statusEnroll" />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
