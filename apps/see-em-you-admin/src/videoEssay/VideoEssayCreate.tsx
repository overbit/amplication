import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VideoEssayCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Access Code" source="accessCode" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
