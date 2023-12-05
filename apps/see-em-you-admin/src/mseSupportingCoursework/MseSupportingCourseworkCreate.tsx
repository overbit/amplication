import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MseSupportingCourseworkCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Alg Course Grade" source="algCourseGrade" />
        <TextInput label="Alg Course Name" source="algCourseName" />
        <TextInput label="Alg Course Num" source="algCourseNum" />
        <NumberInput step={1} label="App Id" source="appId" />
        <TextInput label="Dm Course Grade" source="dmCourseGrade" />
        <TextInput label="Dm Course Name" source="dmCourseName" />
        <TextInput label="Dm Course Num" source="dmCourseNum" />
        <TextInput label="Ds Course Grade" source="dsCourseGrade" />
        <TextInput label="Ds Course Name" source="dsCourseName" />
        <TextInput label="Ds Course Num" source="dsCourseNum" />
        <TextInput label="Prog1 Course Grade" source="prog1CourseGrade" />
        <TextInput label="Prog1 Course Name" source="prog1CourseName" />
        <TextInput label="Prog1 Course Num" source="prog1CourseNum" />
        <TextInput label="Prog2 Course Grade" source="prog2CourseGrade" />
        <TextInput label="Prog2 Course Name" source="prog2CourseName" />
        <TextInput label="Prog2 Course Num" source="prog2CourseNum" />
      </SimpleForm>
    </Create>
  );
};
