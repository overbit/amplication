import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GrescoreMscsWaiverShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Waiver Agree" source="waiverAgree" />
        <DateField source="waiverTime" label="Waiver Time" />
      </SimpleShowLayout>
    </Show>
  );
};
