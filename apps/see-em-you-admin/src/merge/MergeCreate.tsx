import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const MergeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Error Field" source="errorField" />
        <BooleanInput label="Merged" source="merged" />
        <TextInput label="Message" source="message" />
      </SimpleForm>
    </Create>
  );
};
