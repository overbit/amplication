import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const LuUserDepartmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="User Id" source="userId" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
      </SimpleForm>
    </Edit>
  );
};
