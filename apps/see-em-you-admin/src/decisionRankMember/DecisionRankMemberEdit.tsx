import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DecisionRankMemberEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <TextInput label="Decision" source="decision" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Drank" source="drank" />
      </SimpleForm>
    </Edit>
  );
};
