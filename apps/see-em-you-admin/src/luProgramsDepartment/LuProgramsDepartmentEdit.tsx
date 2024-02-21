import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const LuProgramsDepartmentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
      </SimpleForm>
    </Edit>
  );
};
