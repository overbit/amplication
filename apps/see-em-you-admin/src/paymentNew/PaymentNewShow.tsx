import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PaymentNewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Payment Type" source="paymentType" />
        <TextField label="Payment Amount" source="paymentAmount" />
        <TextField label="Payment Intent Date" source="paymentIntentDate" />
        <TextField label="Payment Status" source="payment_status" />
        <DateField source="lastModTime" label="Last Mod Time" />
        <TextField label="Last Mod User Id" source="lastModUserId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
