import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const CcTransactionSummaryEdit = (
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
        <TextInput label="Auth Code" source="authCode" />
        <TextInput label="Auth Message" source="authMessage" />
        <TextInput label="Settle Code" source="settleCode" />
        <TextInput label="Settle Message" source="settleMessage" />
        <NumberInput label="Auth Amount" source="authAmount" />
        <NumberInput label="Settle Amount" source="settleAmount" />
        <NumberInput label="Credit Amount" source="creditAmount" />
      </SimpleForm>
    </Edit>
  );
};
