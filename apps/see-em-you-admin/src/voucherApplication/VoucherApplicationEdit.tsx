import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const VoucherApplicationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <DateTimeInput label="Date Used" source="dateUsed" />
        <NumberInput step={1} label="Voucher Id" source="voucherId" />
      </SimpleForm>
    </Edit>
  );
};
