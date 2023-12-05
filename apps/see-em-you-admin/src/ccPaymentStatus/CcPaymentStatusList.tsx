import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CcPaymentStatusList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CcPaymentStatuses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Auth Total" source="authTotal" />
        <TextField label="Credit Total" source="creditTotal" />
        <TextField label="Id" source="id" />
        <TextField label="Settle Total" source="settleTotal" />
        <DateField source="statusDate" label="Status Date" />
      </Datagrid>
    </List>
  );
};
