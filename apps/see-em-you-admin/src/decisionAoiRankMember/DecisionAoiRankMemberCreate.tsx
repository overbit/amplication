import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DecisionAoiRankMemberCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Arank" source="arank" />
        <TextInput label="Decision" source="decision" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Interest Id" source="interestId" />
        <NumberInput step={1} label="Period Id" source="periodId" />
      </SimpleForm>
    </Create>
  );
};
