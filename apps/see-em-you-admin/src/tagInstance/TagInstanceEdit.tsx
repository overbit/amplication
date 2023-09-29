import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const TagInstanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
