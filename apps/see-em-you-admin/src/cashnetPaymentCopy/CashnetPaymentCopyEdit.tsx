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
        <NumberInput label="Amount" source="amount" />
        <NumberInput step={1} label="App Id" source="appId" />
        <TextInput label="Applicant Email" source="applicantEmail" />
        <TextInput label="Applicant Name" source="applicantName" />
        <NumberInput step={1} label="Merchant" source="merchant" />
        <TextInput label="Status" source="status" />
        <NumberInput step={1} label="Transaction Id" source="transactionId" />
        <TextInput label="Transaction Type" source="transactionType" />
      </SimpleForm>
    </Edit>
  );
};
