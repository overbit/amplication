import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LuProgramsApplicationreqList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuProgramsApplicationreqs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Appreq Id" source="appreqId" />
        <TextField label="Degree Id" source="degreeId" />
        <TextField label="Id" source="id" />
        <TextField label="Program Id" source="programId" />
      </Datagrid>
    </List>
  );
};
