import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const VoucherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Active" source="active" />
        <BooleanField label="Allow Multiple" source="allowMultiple" />
        <TextField label="Code" source="code" />
        <TextField label="Id" source="id" />
        <TextField label="Pretty Code" source="prettyCode" />
        <TextField label="Prog" source="prog" />
      </SimpleShowLayout>
    </Show>
  );
};
