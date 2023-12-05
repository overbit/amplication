import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SemPreviousCourseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SemPreviousCourses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Course Name" source="courseName" />
        <TextField label="Course Year" source="courseYear" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
