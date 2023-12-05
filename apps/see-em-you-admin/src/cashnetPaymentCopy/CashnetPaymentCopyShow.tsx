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
        <TextField label="Amount" source="amount" />
        <TextField label="App Id" source="appId" />
        <TextField label="Applicant Email" source="applicantEmail" />
        <TextField label="Applicant Name" source="applicantName" />
        <TextField label="Id" source="id" />
        <TextField label="Merchant" source="merchant" />
        <TextField label="Status" source="status" />
        <TextField label="Transaction Id" source="transactionId" />
        <DateField source="transactionTime" label="Transaction Time" />
        <TextField label="Transaction Type" source="transactionType" />
      </SimpleShowLayout>
    </Show>
  );
};
