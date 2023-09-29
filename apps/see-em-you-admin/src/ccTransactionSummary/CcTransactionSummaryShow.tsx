import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const CcTransactionSummaryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Auth Amount" source="authAmount" />
        <TextField label="Auth Code" source="authCode" />
        <TextField label="Auth Message" source="authMessage" />
        <TextField label="Cc Id" source="ccId" />
        <TextField label="Credit Amount" source="creditAmount" />
        <TextField label="Date" source="date" />
        <TextField label="Id" source="id" />
        <TextField label="Payment Id" source="paymentId" />
        <TextField label="Report Date" source="reportDate" />
        <TextField label="Settle Amount" source="settleAmount" />
        <TextField label="Settle Code" source="settleCode" />
        <TextField label="Settle Message" source="settleMessage" />
        <TextField label="Time" source="time" />
      </SimpleShowLayout>
    </Show>
  );
};
