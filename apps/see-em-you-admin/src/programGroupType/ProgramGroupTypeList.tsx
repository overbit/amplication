import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProgramGroupTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProgramGroupTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField
          label="Program Group Type Description"
          source="programGroupTypeDescription"
        />
        <TextField
          label="Program Group Type Name"
          source="programGroupTypeName"
        />
      </Datagrid>
    </List>
  );
};
