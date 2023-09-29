import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const VoucherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <BooleanInput label="Allow Multiple" source="allowMultiple" />
        <TextInput label="Code" source="code" />
        <TextInput label="Pretty Code" source="prettyCode" />
        <TextInput label="Prog" source="prog" />
      </SimpleForm>
    </Edit>
  );
};
