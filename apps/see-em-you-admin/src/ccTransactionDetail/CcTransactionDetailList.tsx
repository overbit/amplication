import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CcTransactionDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CcTransactionDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Cc Id" source="ccId" />
        <TextField label="Date" source="date" />
        <TextField label="Id" source="id" />
        <TextField label="Item Gl String" source="itemGlString" />
        <TextField label="Item Name" source="itemName" />
        <TextField label="Item Price Each" source="itemPriceEach" />
        <TextField label="Item Qty" source="itemQty" />
        <TextField label="Payment Id" source="paymentId" />
        <TextField label="Report Date" source="reportDate" />
        <TextField label="Time" source="time" />
        <TextField label="Transaction Type" source="transactionType" />
      </Datagrid>
    </List>
  );
};
