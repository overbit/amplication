import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const SelfGenderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Gender Index" source="genderIndex" />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
