import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TeachingExperienceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Courses Taught" source="coursesTaught" />
        <TextInput label="End Date" source="endDate" />
        <TextInput label="Institution" source="institution" />
        <NumberInput step={1} label="Order Entered" source="orderEntered" />
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
