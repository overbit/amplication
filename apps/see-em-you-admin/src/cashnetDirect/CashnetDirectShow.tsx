import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CashnetDirectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
