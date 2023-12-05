import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VideoEssayEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Access Code" source="accessCode" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
