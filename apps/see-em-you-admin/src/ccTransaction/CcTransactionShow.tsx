import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const CcTransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Cardholder Name First" source="cardholderNameFirst" />
        <TextField label="Cardholder Name Last" source="cardholderNameLast" />
        <TextField label="Id" source="id" />
        <TextField label="Payment Id" source="paymentId" />
        <TextField label="Store Number" source="storeNumber" />
      </SimpleShowLayout>
    </Show>
  );
};
