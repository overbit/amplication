import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DomainList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Domains"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Name" source="name" />
        <TextField label="Description" source="description" />
        <TextField label="Path" source="path" />
        <BooleanField label="Active" source="active" />
        <TextField label="Banner" source="banner" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
