import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CcTransactionReportEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Last Mod Date" source="lastModDate" />
        <NumberInput step={1} label="Size" source="size" />
      </SimpleForm>
    </Edit>
  );
};
