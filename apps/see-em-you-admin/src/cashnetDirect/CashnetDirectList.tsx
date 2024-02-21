import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CashnetDirectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CashnetDirects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Batch" source="batch" />
        <TextField label="Station" source="station" />
        <TextField label="Tx Number" source="txNumber" />
        <TextField label="Trans Type" source="transType" />
        <TextField label="Status" source="status" />
        <TextField label="Cust Code" source="custCode" />
        <TextField label="Name" source="name" />
        <TextField label="App Email" source="appEmail" />
        <TextField label="App Id" source="appId" />
        <TextField label="Dept" source="dept" />
        <TextField label="Payment Type" source="paymentType" />
        <TextField label="Amount" source="amount" />
        <DateField source="created" label="Created" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
