import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CashnetPaymentCopyShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="App Id" source="appId" />
        <TextField label="Transaction Id" source="transactionId" />
        <TextField label="Applicant Name" source="applicantName" />
        <TextField label="Applicant Email" source="applicantEmail" />
        <TextField label="Merchant" source="merchant" />
        <TextField label="Status" source="status" />
        <DateField source="transactionTime" label="Transaction Time" />
        <TextField label="Transaction Type" source="transactionType" />
        <TextField label="Amount" source="amount" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
