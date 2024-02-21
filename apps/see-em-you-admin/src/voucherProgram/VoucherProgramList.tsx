import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VoucherProgramList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VoucherPrograms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Voucher Id" source="voucherId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
