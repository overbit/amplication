import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PositiveFactorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <TextInput label="Positive Factor" source="positiveFactor" />
        <NumberInput
          step={1}
          label="Positive Factor Id"
          source="positiveFactorId"
        />
      </SimpleForm>
    </Edit>
  );
};
