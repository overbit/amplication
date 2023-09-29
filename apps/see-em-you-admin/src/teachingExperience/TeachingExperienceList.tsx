import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeachingExperienceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TeachingExperiences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address" source="address" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Courses Taught" source="coursesTaught" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Id" source="id" />
        <TextField label="Institution" source="institution" />
        <TextField label="Order Entered" source="orderEntered" />
        <TextField label="Start Date" source="startDate" />
      </Datagrid>
    </List>
  );
};
