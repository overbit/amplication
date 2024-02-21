import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ApplicationDecisionSchoolEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <TextInput label="Name" source="name" />
        <BooleanInput label="Accepted" source="accepted" />
      </SimpleForm>
    </Edit>
  );
};
