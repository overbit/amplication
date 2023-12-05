import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ProgramGroupGroupTypeCreate = (
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
        <NumberInput
          step={1}
          label="Program Group Type Id"
          source="programGroupTypeId"
        />
      </SimpleForm>
    </Create>
  );
};
