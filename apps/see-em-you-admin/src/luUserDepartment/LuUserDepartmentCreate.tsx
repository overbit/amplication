import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const LuUserDepartmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="User Id" source="userId" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
      </SimpleForm>
    </Create>
  );
};
