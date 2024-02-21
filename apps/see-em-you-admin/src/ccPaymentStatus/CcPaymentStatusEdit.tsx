import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const CcPaymentStatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Auth Total" source="authTotal" />
        <NumberInput label="Settle Total" source="settleTotal" />
        <NumberInput label="Credit Total" source="creditTotal" />
      </SimpleForm>
    </Edit>
  );
};
