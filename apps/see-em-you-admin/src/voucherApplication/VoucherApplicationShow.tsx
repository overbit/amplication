import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const VoucherApplicationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="App Id" source="appId" />
        <TextField label="Date Used" source="dateUsed" />
        <TextField label="Id" source="id" />
        <TextField label="Voucher Id" source="voucherId" />
      </SimpleShowLayout>
    </Show>
  );
};
