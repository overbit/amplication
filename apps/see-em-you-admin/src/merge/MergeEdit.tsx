import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const MergeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <BooleanInput label="Merged" source="merged" />
        <NumberInput step={1} label="Error Field" source="errorField" />
        <TextInput label="Message" source="message" />
      </SimpleForm>
    </Edit>
  );
};
