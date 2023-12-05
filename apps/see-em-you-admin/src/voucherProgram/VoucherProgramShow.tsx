import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const VoucherProgramShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Voucher Id" source="voucherId" />
      </SimpleShowLayout>
    </Show>
  );
};
