import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const VoucherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <BooleanField label="Active" source="active" />
        <BooleanField label="Allow Multiple" source="allowMultiple" />
        <TextField label="Pretty Code" source="prettyCode" />
        <TextField label="Prog" source="prog" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
