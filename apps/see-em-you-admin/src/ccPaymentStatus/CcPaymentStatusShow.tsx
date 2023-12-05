import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CcPaymentStatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Auth Total" source="authTotal" />
        <TextField label="Credit Total" source="creditTotal" />
        <TextField label="Id" source="id" />
        <TextField label="Settle Total" source="settleTotal" />
        <DateField source="statusDate" label="Status Date" />
      </SimpleShowLayout>
    </Show>
  );
};
