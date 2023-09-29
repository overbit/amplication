import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const IniDisciplinaryActionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Retraction" source="retraction" />
        <TextInput
          label="Retraction Description"
          source="retractionDescription"
        />
        <NumberInput step={1} label="Sanction" source="sanction" />
        <TextInput label="Sanction Description" source="sanctionDescription" />
      </SimpleForm>
    </Create>
  );
};
