import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DecisionAoiRankShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Interest Id" source="interestId" />
        <TextField label="Decision" source="decision" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Ranking" source="ranking" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
