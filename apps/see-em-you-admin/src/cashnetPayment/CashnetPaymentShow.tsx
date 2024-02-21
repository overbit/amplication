import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const CashnetPaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Transaction Id" source="transactionId" />
        <TextField label="Applicant Name" source="applicantName" />
        <TextField label="Applicant Email" source="applicantEmail" />
        <TextField label="Merchant" source="merchant" />
        <TextField label="Status" source="status" />
        <DateField source="transactionTime" label="Transaction Time" />
        <TextField label="Transaction Type" source="transactionType" />
        <TextField label="Amount" source="amount" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
