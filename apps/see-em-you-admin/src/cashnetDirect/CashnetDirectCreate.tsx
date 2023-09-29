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
        <NumberInput label="Amount" source="amount" />
        <TextInput label="App Email" source="appEmail" />
        <NumberInput step={1} label="App Id" source="appId" />
        <NumberInput step={1} label="Batch" source="batch" />
        <NumberInput step={1} label="Cust Code" source="custCode" />
        <TextInput label="Dept" source="dept" />
        <TextInput label="Name" source="name" />
        <TextInput label="Payment Type" source="paymentType" />
        <NumberInput step={1} label="Station" source="station" />
        <TextInput label="Status" source="status" />
        <TextInput label="Trans Type" source="transType" />
        <NumberInput step={1} label="Tx Number" source="txNumber" />
      </SimpleForm>
    </Create>
  );
};
