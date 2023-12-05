import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CcTransactionSummaryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CcTransactionSummaries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Auth Amount" source="authAmount" />
        <TextField label="Auth Code" source="authCode" />
        <TextField label="Auth Message" source="authMessage" />
        <TextField label="Cc Id" source="ccId" />
        <TextField label="Credit Amount" source="creditAmount" />
        <TextField label="Date" source="date" />
        <TextField label="Id" source="id" />
        <TextField label="Payment Id" source="paymentId" />
        <TextField label="Report Date" source="reportDate" />
        <TextField label="Settle Amount" source="settleAmount" />
        <TextField label="Settle Code" source="settleCode" />
        <TextField label="Settle Message" source="settleMessage" />
        <TextField label="Time" source="time" />
      </Datagrid>
    </List>
  );
};
