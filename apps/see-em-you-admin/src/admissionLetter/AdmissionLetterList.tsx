import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AdmissionLetterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AdmissionLetters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Sections" source="sections" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
