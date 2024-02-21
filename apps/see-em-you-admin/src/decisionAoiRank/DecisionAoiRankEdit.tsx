import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DecisionAoiRankEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Interest Id" source="interestId" />
        <TextInput label="Decision" source="decision" />
        <NumberInput
          step={1}
          label="Lu Users Usertypes Id"
          source="luUsersUsertypesId"
        />
        <TextInput label="Ranking" source="ranking" />
      </SimpleForm>
    </Edit>
  );
};
