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
        <TextField label="Cc Id" source="ccId" />
        <TextField label="Date" source="date" />
        <TextField label="Time" source="time" />
        <TextField label="Report Date" source="reportDate" />
        <TextField label="Payment Id" source="paymentId" />
        <TextField label="Auth Code" source="authCode" />
        <TextField label="Auth Message" source="authMessage" />
        <TextField label="Settle Code" source="settleCode" />
        <TextField label="Settle Message" source="settleMessage" />
        <TextField label="Auth Amount" source="authAmount" />
        <TextField label="Settle Amount" source="settleAmount" />
        <TextField label="Credit Amount" source="creditAmount" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
