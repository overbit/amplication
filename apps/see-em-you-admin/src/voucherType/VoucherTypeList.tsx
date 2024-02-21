import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VoucherTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VoucherTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Description" source="description" />
        <TextField label="Prefix" source="prefix" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
