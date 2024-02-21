import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RiskFactorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Risk Factor" source="riskFactor" />
        <NumberInput step={1} label="Array Index" source="arrayIndex" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
      </SimpleForm>
    </Create>
  );
};
