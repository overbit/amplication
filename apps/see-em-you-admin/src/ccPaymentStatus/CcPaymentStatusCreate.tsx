import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const CcPaymentStatusCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Auth Total" source="authTotal" />
        <NumberInput label="Credit Total" source="creditTotal" />
        <NumberInput label="Settle Total" source="settleTotal" />
      </SimpleForm>
    </Create>
  );
};
