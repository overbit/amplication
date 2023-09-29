import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RiskFactorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Array Index" source="arrayIndex" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <TextInput label="Risk Factor" source="riskFactor" />
      </SimpleForm>
    </Create>
  );
};
