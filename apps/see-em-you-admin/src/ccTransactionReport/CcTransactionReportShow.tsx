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
        <TextField label="Size" source="size" />
        <TextField label="Last Mod Date" source="lastModDate" />
        <DateField source="statusTime" label="Status Time" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
