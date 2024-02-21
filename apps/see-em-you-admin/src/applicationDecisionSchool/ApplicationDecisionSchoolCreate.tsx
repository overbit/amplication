import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ApplicationDecisionSchoolCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <TextInput label="Name" source="name" />
        <BooleanInput label="Accepted" source="accepted" />
      </SimpleForm>
    </Create>
  );
};
