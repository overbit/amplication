import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TeachingExperienceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Courses Taught" source="coursesTaught" />
        <TextInput label="End Date" source="endDate" />
        <TextInput label="Institution" source="institution" />
        <NumberInput step={1} label="Order Entered" source="orderEntered" />
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
