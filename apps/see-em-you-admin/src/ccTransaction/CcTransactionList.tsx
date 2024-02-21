import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CcTransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CcTransactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Payment Id" source="paymentId" />
        <TextField label="Store Number" source="storeNumber" />
        <TextField label="Cardholder Name Last" source="cardholderNameLast" />
        <TextField label="Cardholder Name First" source="cardholderNameFirst" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
