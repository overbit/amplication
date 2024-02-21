import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const CashnetDirectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
