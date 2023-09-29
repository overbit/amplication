import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const IniDisciplinaryActionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
