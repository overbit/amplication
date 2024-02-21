import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ScsUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ScsUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Users Id" source="usersId" />
        <TextField label="Cmu Guid" source="cmuGuid" />
        <TextField label="Cs Id" source="csId" />
        <TextField label="Andrew Id" source="andrewId" />
        <TextField label="Ece Id" source="eceId" />
        <TextField label="Qatar Id" source="qatarId" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
