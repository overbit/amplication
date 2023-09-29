import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CashnetPaymentCopyList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CashnetPaymentCopies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Amount" source="amount" />
        <TextField label="App Id" source="appId" />
        <TextField label="Applicant Email" source="applicantEmail" />
        <TextField label="Applicant Name" source="applicantName" />
        <TextField label="Id" source="id" />
        <TextField label="Merchant" source="merchant" />
        <TextField label="Status" source="status" />
        <TextField label="Transaction Id" source="transactionId" />
        <DateField source="transactionTime" label="Transaction Time" />
        <TextField label="Transaction Type" source="transactionType" />
      </Datagrid>
    </List>
  );
};
