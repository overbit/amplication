import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ProgramGroupRoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Program Group Id"
          source="programGroupId"
        />
        <NumberInput step={1} label="Users Id" source="usersId" />
        <NumberInput step={1} label="Role Id" source="roleId" />
      </SimpleForm>
    </Edit>
  );
};
