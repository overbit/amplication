import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const CcTransactionDetailShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cc Id" source="ccId" />
        <TextField label="Date" source="date" />
        <TextField label="Time" source="time" />
        <TextField label="Report Date" source="reportDate" />
        <TextField label="Payment Id" source="paymentId" />
        <TextField label="Transaction Type" source="transactionType" />
        <TextField label="Item Name" source="itemName" />
        <TextField label="Item Qty" source="itemQty" />
        <TextField label="Item Price Each" source="itemPriceEach" />
        <TextField label="Item Gl String" source="itemGlString" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
