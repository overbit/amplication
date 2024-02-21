import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DecisionRankCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <TextInput label="Decision" source="decision" />
        <NumberInput
          step={1}
          label="Lu Users Usertypes Id"
          source="luUsersUsertypesId"
        />
        <TextInput label="Ranking" source="ranking" />
      </SimpleForm>
    </Create>
  );
};
