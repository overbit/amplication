import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CcTransactionSummaryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Auth Amount" source="authAmount" />
        <TextInput label="Auth Code" source="authCode" />
        <TextInput label="Auth Message" source="authMessage" />
        <NumberInput step={1} label="Cc Id" source="ccId" />
        <NumberInput label="Credit Amount" source="creditAmount" />
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Payment Id" source="paymentId" />
        <DateTimeInput label="Report Date" source="reportDate" />
        <NumberInput label="Settle Amount" source="settleAmount" />
        <TextInput label="Settle Code" source="settleCode" />
        <TextInput label="Settle Message" source="settleMessage" />
        <DateTimeInput label="Time" source="time" />
      </SimpleForm>
    </Create>
  );
};
