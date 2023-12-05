import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const ApplicationContentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Desired" source="desired" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <BooleanInput label="Required" source="required" />
        <TextInput label="Section Identifier" source="sectionIdentifier" />
      </SimpleForm>
    </Create>
  );
};
