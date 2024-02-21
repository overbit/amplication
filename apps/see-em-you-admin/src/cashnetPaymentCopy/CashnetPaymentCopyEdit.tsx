import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const CashnetPaymentCopyEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <NumberInput step={1} label="Transaction Id" source="transactionId" />
        <TextInput label="Applicant Name" source="applicantName" />
        <TextInput label="Applicant Email" source="applicantEmail" />
        <NumberInput step={1} label="Merchant" source="merchant" />
        <TextInput label="Status" source="status" />
        <TextInput label="Transaction Type" source="transactionType" />
        <NumberInput label="Amount" source="amount" />
      </SimpleForm>
    </Edit>
  );
};
