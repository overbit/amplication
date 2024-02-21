import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VoucherApplicationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VoucherApplications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Voucher Id" source="voucherId" />
        <TextField label="Date Used" source="dateUsed" />
        <TextField label="App Id" source="appId" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
