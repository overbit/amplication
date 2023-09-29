import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const VoucherProgramCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput step={1} label="Voucher Id" source="voucherId" />
      </SimpleForm>
    </Create>
  );
};
