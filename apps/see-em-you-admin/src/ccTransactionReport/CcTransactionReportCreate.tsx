import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CcTransactionReportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Size" source="size" />
        <DateTimeInput label="Last Mod Date" source="lastModDate" />
      </SimpleForm>
    </Create>
  );
};
