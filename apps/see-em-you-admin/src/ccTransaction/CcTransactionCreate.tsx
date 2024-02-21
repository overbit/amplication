import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const CcTransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Payment Id" source="paymentId" />
        <TextInput label="Store Number" source="storeNumber" />
        <TextInput label="Cardholder Name Last" source="cardholderNameLast" />
        <TextInput label="Cardholder Name First" source="cardholderNameFirst" />
      </SimpleForm>
    </Create>
  );
};
