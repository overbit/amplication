import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RiskFactorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Risk Factor" source="riskFactor" />
        <NumberInput step={1} label="Array Index" source="arrayIndex" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
      </SimpleForm>
    </Edit>
  );
};
