import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const MlSupportingCourseworkList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MlSupportingCourseworks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <TextField label="Intro Course2 Grade" source="introCourse2Grade" />
        <TextField label="Intro Course2 Num" source="introCourse2Num" />
        <TextField
          label="Intro Course2 Semester"
          source="introCourse2Semester"
        />
        <TextField label="Intro Course Grade" source="introCourseGrade" />
        <TextField label="Intro Course Num" source="introCourseNum" />
        <TextField label="Intro Course Semester" source="introCourseSemester" />
        <TextField label="Ml1 Course Grade" source="ml1CourseGrade" />
        <TextField label="Ml1 Course Num" source="ml1CourseNum" />
        <TextField label="Ml1 Course Semester" source="ml1CourseSemester" />
        <TextField label="Ml2 Course Grade" source="ml2CourseGrade" />
        <TextField label="Ml2 Course Num" source="ml2CourseNum" />
        <TextField label="Ml2 Course Semester" source="ml2CourseSemester" />
      </Datagrid>
    </List>
  );
};
