import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ProgramGroupProgramCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Program Group Id"
          source="programGroupId"
        />
        <NumberInput step={1} label="Unit Id" source="unitId" />
      </SimpleForm>
    </Create>
  );
};
