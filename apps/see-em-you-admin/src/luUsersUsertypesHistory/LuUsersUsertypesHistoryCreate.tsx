import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const LuUsersUsertypesHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Delete Users Id" source="deleteUsersId" />
        <NumberInput step={1} label="User Id" source="userId" />
        <NumberInput step={1} label="Usertype Id" source="usertypeId" />
      </SimpleForm>
    </Create>
  );
};
