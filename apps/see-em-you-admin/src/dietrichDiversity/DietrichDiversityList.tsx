import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DietrichDiversityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DietrichDiversities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Background" source="background" />
        <TextField label="Id" source="id" />
        <TextField label="Life Experience" source="lifeExperience" />
      </Datagrid>
    </List>
  );
};
