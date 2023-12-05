import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const VoucherApplicationErrorEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Allow Multiple" source="allowMultiple" />
        <NumberInput step={1} label="App Id" source="appId" />
        <TextInput label="Code" source="code" />
        <TextInput label="Err Msg" source="errMsg" />
        <NumberInput step={1} label="Va Id" source="vaId" />
      </SimpleForm>
    </Edit>
  );
};
