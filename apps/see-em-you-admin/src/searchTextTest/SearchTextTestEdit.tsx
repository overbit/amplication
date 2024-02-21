import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SearchTextTestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Guid" source="guid" />
        <TextInput label="Application Text" source="applicationText" />
      </SimpleForm>
    </Edit>
  );
};
