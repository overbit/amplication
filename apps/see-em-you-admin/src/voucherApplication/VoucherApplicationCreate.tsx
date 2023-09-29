import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const VoucherApplicationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <DateTimeInput label="Date Used" source="dateUsed" />
        <NumberInput step={1} label="Voucher Id" source="voucherId" />
      </SimpleForm>
    </Create>
  );
};
