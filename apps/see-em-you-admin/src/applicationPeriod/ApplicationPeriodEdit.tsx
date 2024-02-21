import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ApplicationPeriodEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <DateTimeInput label="Start Date" source="startDate" />
        <DateTimeInput label="End Date" source="endDate" />
      </SimpleForm>
    </Edit>
  );
};
