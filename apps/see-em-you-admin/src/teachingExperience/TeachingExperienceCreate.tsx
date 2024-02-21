import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TeachingExperienceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Order Entered" source="orderEntered" />
        <TextInput label="Institution" source="institution" />
        <TextInput label="Address" source="address" />
        <TextInput label="Courses Taught" source="coursesTaught" />
        <DateTimeInput label="Start Date" source="startDate" />
        <TextInput label="End Date" source="endDate" />
      </SimpleForm>
    </Create>
  );
};
