import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CcTransactionReportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Last Mod Date" source="lastModDate" />
        <NumberInput step={1} label="Size" source="size" />
      </SimpleForm>
    </Create>
  );
};
