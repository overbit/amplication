import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SlateProgramList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SlatePrograms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="First" source="first" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Mse Program1" source="mseProgram1" />
        <TextField label="Mse Program2" source="mseProgram2" />
        <TextField label="Mse Program3" source="mseProgram3" />
        <TextField label="Prefix" source="prefix" />
      </Datagrid>
    </List>
  );
};
