import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const LuProgramsApplicationreqEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Appreq Id" source="appreqId" />
        <NumberInput step={1} label="Degree Id" source="degreeId" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Edit>
  );
};
