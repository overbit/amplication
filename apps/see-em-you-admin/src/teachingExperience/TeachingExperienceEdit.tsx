import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TeachingExperienceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Order Entered" source="orderEntered" />
        <TextInput label="Institution" source="institution" />
        <TextInput label="Address" source="address" />
        <TextInput label="Courses Taught" source="coursesTaught" />
        <DateTimeInput label="Start Date" source="startDate" />
        <TextInput label="End Date" source="endDate" />
      </SimpleForm>
    </Edit>
  );
};
