import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ApplicationTitle } from "../application/ApplicationTitle";

export const MlSupportingCourseworkCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <TextInput label="Intro Course2 Grade" source="introCourse2Grade" />
        <TextInput label="Intro Course2 Num" source="introCourse2Num" />
        <TextInput
          label="Intro Course2 Semester"
          source="introCourse2Semester"
        />
        <TextInput label="Intro Course Grade" source="introCourseGrade" />
        <TextInput label="Intro Course Num" source="introCourseNum" />
        <TextInput label="Intro Course Semester" source="introCourseSemester" />
        <TextInput label="Ml1 Course Grade" source="ml1CourseGrade" />
        <TextInput label="Ml1 Course Num" source="ml1CourseNum" />
        <TextInput label="Ml1 Course Semester" source="ml1CourseSemester" />
        <TextInput label="Ml2 Course Grade" source="ml2CourseGrade" />
        <TextInput label="Ml2 Course Num" source="ml2CourseNum" />
        <TextInput label="Ml2 Course Semester" source="ml2CourseSemester" />
      </SimpleForm>
    </Create>
  );
};
