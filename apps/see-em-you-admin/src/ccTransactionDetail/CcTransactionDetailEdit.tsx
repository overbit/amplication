import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const CcTransactionDetailEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Cc Id" source="ccId" />
        <DateTimeInput label="Date" source="date" />
        <DateTimeInput label="Time" source="time" />
        <DateTimeInput label="Report Date" source="reportDate" />
        <NumberInput step={1} label="Payment Id" source="paymentId" />
        <TextInput label="Transaction Type" source="transactionType" />
        <TextInput label="Item Name" source="itemName" />
        <NumberInput label="Item Qty" source="itemQty" />
        <NumberInput label="Item Price Each" source="itemPriceEach" />
        <TextInput label="Item Gl String" source="itemGlString" />
      </SimpleForm>
    </Edit>
  );
};
