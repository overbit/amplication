import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CcTransactionReportEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Size" source="size" />
        <DateTimeInput label="Last Mod Date" source="lastModDate" />
      </SimpleForm>
    </Edit>
  );
};
