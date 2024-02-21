import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const ApplicationContentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Section Identifier" source="sectionIdentifier" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <BooleanInput label="Desired" source="desired" />
        <BooleanInput label="Required" source="required" />
      </SimpleForm>
    </Edit>
  );
};
