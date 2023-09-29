import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const CcTransactionDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Cc Id" source="ccId" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Item Gl String" source="itemGlString" />
        <TextInput label="Item Name" source="itemName" />
        <NumberInput label="Item Price Each" source="itemPriceEach" />
        <NumberInput label="Item Qty" source="itemQty" />
        <NumberInput step={1} label="Payment Id" source="paymentId" />
        <DateTimeInput label="Report Date" source="reportDate" />
        <DateTimeInput label="Time" source="time" />
        <TextInput label="Transaction Type" source="transactionType" />
      </SimpleForm>
    </Create>
  );
};
