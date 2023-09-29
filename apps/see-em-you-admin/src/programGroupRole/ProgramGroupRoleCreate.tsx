import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ProgramGroupRoleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Program Group Id"
          source="programGroupId"
        />
        <NumberInput step={1} label="Role Id" source="roleId" />
        <NumberInput step={1} label="Users Id" source="usersId" />
      </SimpleForm>
    </Create>
  );
};
