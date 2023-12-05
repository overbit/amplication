import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SemPreviousCourseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Course Name" source="courseName" />
        <NumberInput step={1} label="Course Year" source="courseYear" />
      </SimpleForm>
    </Create>
  );
};
