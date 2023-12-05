import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const VoucherApplicationErrorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Allow Multiple" source="allowMultiple" />
        <NumberInput step={1} label="App Id" source="appId" />
        <TextInput label="Code" source="code" />
        <TextInput label="Err Msg" source="errMsg" />
        <NumberInput step={1} label="Va Id" source="vaId" />
      </SimpleForm>
    </Create>
  );
};
