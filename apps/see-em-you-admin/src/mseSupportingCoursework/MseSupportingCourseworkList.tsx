import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MseSupportingCourseworkList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MseSupportingCourseworks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
