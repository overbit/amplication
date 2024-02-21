import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DecisionRankMemberCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <TextInput label="Decision" source="decision" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Drank" source="drank" />
      </SimpleForm>
    </Create>
  );
};
