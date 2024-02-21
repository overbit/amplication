import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProgramGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Unit Id" source="unitId" />
        <TextInput label="Program Group Name" source="programGroupName" />
        <TextInput
          label="Program Group Name Short"
          source="programGroupNameShort"
        />
        <TextInput
          label="Program Group Description"
          source="programGroupDescription"
        />
      </SimpleForm>
    </Edit>
  );
};
