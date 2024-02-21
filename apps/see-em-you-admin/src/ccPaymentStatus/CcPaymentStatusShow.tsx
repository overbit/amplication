import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CcPaymentStatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="statusDate" label="Status Date" />
        <TextField label="Auth Total" source="authTotal" />
        <TextField label="Settle Total" source="settleTotal" />
        <TextField label="Credit Total" source="creditTotal" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
