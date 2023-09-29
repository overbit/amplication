import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const SelfGenderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Gender Index" source="genderIndex" />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
