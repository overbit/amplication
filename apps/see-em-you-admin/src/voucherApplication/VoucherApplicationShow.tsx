import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const VoucherApplicationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Voucher Id" source="voucherId" />
        <TextField label="Date Used" source="dateUsed" />
        <TextField label="App Id" source="appId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
