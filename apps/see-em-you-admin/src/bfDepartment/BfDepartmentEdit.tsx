import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BfDepartmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Bf Department" source="bfDepartment" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
      </SimpleForm>
    </Edit>
  );
};
