import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const VoucherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <BooleanInput label="Active" source="active" />
        <BooleanInput label="Allow Multiple" source="allowMultiple" />
        <TextInput label="Pretty Code" source="prettyCode" />
        <TextInput label="Prog" source="prog" />
      </SimpleForm>
    </Create>
  );
};
