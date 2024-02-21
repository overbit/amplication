import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const InstituteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Institutes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Name" source="name" />
        <TextField label="Users Id" source="usersId" />
        <BooleanField label="Hide" source="hide" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
