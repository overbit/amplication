import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const ApplicationContentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Desired" source="desired" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <BooleanInput label="Required" source="required" />
        <TextInput label="Section Identifier" source="sectionIdentifier" />
      </SimpleForm>
    </Edit>
  );
};
