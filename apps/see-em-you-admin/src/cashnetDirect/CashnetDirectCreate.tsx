import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const CashnetDirectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Batch" source="batch" />
        <NumberInput step={1} label="Station" source="station" />
        <NumberInput step={1} label="Tx Number" source="txNumber" />
        <TextInput label="Trans Type" source="transType" />
        <TextInput label="Status" source="status" />
        <NumberInput step={1} label="Cust Code" source="custCode" />
        <TextInput label="Name" source="name" />
        <TextInput label="App Email" source="appEmail" />
        <NumberInput step={1} label="App Id" source="appId" />
        <TextInput label="Dept" source="dept" />
        <TextInput label="Payment Type" source="paymentType" />
        <NumberInput label="Amount" source="amount" />
      </SimpleForm>
    </Create>
  );
};
