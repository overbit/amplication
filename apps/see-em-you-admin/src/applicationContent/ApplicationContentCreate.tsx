import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const ApplicationContentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Section Identifier" source="sectionIdentifier" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <BooleanInput label="Desired" source="desired" />
        <BooleanInput label="Required" source="required" />
      </SimpleForm>
    </Create>
  );
};
