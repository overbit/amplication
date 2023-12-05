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
        <TextInput
          label="Program Group Description"
          source="programGroupDescription"
        />
        <TextInput label="Program Group Name" source="programGroupName" />
        <TextInput
          label="Program Group Name Short"
          source="programGroupNameShort"
        />
        <NumberInput step={1} label="Unit Id" source="unitId" />
      </SimpleForm>
    </Edit>
  );
};
