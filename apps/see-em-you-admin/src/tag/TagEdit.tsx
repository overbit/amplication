import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const TagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
