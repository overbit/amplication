import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const MultiprogramlockoutEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Program Id1" source="programId1" />
        <NumberInput step={1} label="Program Id2" source="programId2" />
      </SimpleForm>
    </Edit>
  );
};
