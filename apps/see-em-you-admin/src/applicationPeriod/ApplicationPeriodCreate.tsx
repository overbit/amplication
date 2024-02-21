import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ApplicationPeriodCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <DateTimeInput label="Start Date" source="startDate" />
        <DateTimeInput label="End Date" source="endDate" />
      </SimpleForm>
    </Create>
  );
};
