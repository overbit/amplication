import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const DecisionAoiRankEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Decision" source="decision" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Interest Id" source="interestId" />
        <NumberInput
          step={1}
          label="Lu Users Usertypes Id"
          source="luUsersUsertypesId"
        />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <TextInput label="Ranking" source="ranking" />
      </SimpleForm>
    </Edit>
  );
};
