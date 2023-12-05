import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BfDepartmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bf Department" source="bfDepartment" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
      </SimpleForm>
    </Create>
  );
};
