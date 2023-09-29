import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SemPreviousCourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Course Name" source="courseName" />
        <NumberInput step={1} label="Course Year" source="courseYear" />
      </SimpleForm>
    </Edit>
  );
};
