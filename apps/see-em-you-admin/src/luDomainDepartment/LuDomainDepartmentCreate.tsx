import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const LuDomainDepartmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Domain Id" source="domainId" />
        <NumberInput step={1} label="Drank" source="drank" />
      </SimpleForm>
    </Create>
  );
};
