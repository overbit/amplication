import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SearchTextTestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Guid" source="guid" />
        <TextInput label="Application Text" source="applicationText" />
      </SimpleForm>
    </Create>
  );
};
