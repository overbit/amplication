import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const DepartmentUnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Unit Id" source="unitId" />
      </SimpleForm>
    </Edit>
  );
};
