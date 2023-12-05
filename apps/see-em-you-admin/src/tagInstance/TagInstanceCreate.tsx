import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const TagInstanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department" source="department" />
        <NumberInput step={1} label="Owner" source="owner" />
        <NumberInput step={1} label="Period" source="period" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "open", value: "open" },
            { label: "closed", value: "closed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="Tag Id" source="tagId" />
      </SimpleForm>
    </Create>
  );
};
