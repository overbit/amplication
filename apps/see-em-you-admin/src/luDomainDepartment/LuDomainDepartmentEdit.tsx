import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const LuDomainDepartmentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Domain Id" source="domainId" />
        <NumberInput step={1} label="Drank" source="drank" />
      </SimpleForm>
    </Edit>
  );
};
