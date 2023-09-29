import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ParentInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <DateTimeInput label="Modified" source="modified" />
        <NumberInput step={1} label="P1 Ed Level" source="p1EdLevel" />
        <TextInput label="P1 Profession" source="p1Profession" />
        <NumberInput step={1} label="P2 Ed Level" source="p2EdLevel" />
        <TextInput label="P2 Profession" source="p2Profession" />
      </SimpleForm>
    </Edit>
  );
};
