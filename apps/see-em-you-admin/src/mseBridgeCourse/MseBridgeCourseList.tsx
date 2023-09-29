import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MseBridgeCourseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MseBridgeCourses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Course Id" source="courseId" />
        <TextField label="Id" source="id" />
        <TextField label="Reviewer Id" source="reviewerId" />
      </Datagrid>
    </List>
  );
};
