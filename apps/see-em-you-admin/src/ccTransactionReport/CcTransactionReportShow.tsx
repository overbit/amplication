import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CcTransactionReportShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Last Mod Date" source="lastModDate" />
        <TextField label="Size" source="size" />
        <DateField source="statusTime" label="Status Time" />
      </SimpleShowLayout>
    </Show>
  );
};
