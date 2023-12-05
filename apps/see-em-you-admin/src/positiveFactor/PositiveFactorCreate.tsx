import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PositiveFactorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <TextInput label="Positive Factor" source="positiveFactor" />
        <NumberInput
          step={1}
          label="Positive Factor Id"
          source="positiveFactorId"
        />
      </SimpleForm>
    </Create>
  );
};
