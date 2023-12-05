import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RiskFactorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Array Index" source="arrayIndex" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <TextInput label="Risk Factor" source="riskFactor" />
      </SimpleForm>
    </Edit>
  );
};
