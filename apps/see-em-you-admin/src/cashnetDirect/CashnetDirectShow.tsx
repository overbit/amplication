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
        <TextField label="Amount" source="amount" />
        <TextField label="App Email" source="appEmail" />
        <TextField label="App Id" source="appId" />
        <TextField label="Batch" source="batch" />
        <DateField source="created" label="Created" />
        <TextField label="Cust Code" source="custCode" />
        <TextField label="Dept" source="dept" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Payment Type" source="paymentType" />
        <TextField label="Station" source="station" />
        <TextField label="Status" source="status" />
        <TextField label="Trans Type" source="transType" />
        <TextField label="Tx Number" source="txNumber" />
      </SimpleShowLayout>
    </Show>
  );
};
