import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const TagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <SelectInput
          source="sticky"
          label="Sticky"
          choices={[
            { label: "static", value: "static" },
            { label: "dynamic", value: "dynamic" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Category" source="category" />
        <TextInput label="Parent" source="parent" />
      </SimpleForm>
    </Create>
  );
};
