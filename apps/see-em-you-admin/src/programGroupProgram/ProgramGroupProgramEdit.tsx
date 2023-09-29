import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ProgramGroupProgramEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Program Group Id"
          source="programGroupId"
        />
        <NumberInput step={1} label="Unit Id" source="unitId" />
      </SimpleForm>
    </Edit>
  );
};
