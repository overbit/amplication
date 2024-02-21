import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PositiveFactorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Positive Factor" source="positiveFactor" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput
          step={1}
          label="Positive Factor Id"
          source="positiveFactorId"
        />
      </SimpleForm>
    </Create>
  );
};
