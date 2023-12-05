import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const UnitRoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Lu Users Usertypes Id"
          source="luUsersUsertypesId"
        />
        <NumberInput step={1} label="Role Id" source="roleId" />
        <NumberInput step={1} label="Unit Id" source="unitId" />
        <NumberInput step={1} label="Users Id" source="usersId" />
      </SimpleForm>
    </Create>
  );
};
