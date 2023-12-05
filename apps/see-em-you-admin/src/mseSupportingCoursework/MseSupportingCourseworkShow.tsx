import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MseSupportingCourseworkShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Alg Course Grade" source="algCourseGrade" />
        <TextField label="Alg Course Name" source="algCourseName" />
        <TextField label="Alg Course Num" source="algCourseNum" />
        <TextField label="App Id" source="appId" />
        <TextField label="Dm Course Grade" source="dmCourseGrade" />
        <TextField label="Dm Course Name" source="dmCourseName" />
        <TextField label="Dm Course Num" source="dmCourseNum" />
        <TextField label="Ds Course Grade" source="dsCourseGrade" />
        <TextField label="Ds Course Name" source="dsCourseName" />
        <TextField label="Ds Course Num" source="dsCourseNum" />
        <TextField label="Id" source="id" />
        <TextField label="Prog1 Course Grade" source="prog1CourseGrade" />
        <TextField label="Prog1 Course Name" source="prog1CourseName" />
        <TextField label="Prog1 Course Num" source="prog1CourseNum" />
        <TextField label="Prog2 Course Grade" source="prog2CourseGrade" />
        <TextField label="Prog2 Course Name" source="prog2CourseName" />
        <TextField label="Prog2 Course Num" source="prog2CourseNum" />
      </SimpleShowLayout>
    </Show>
  );
};
