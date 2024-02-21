import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DecisionAoiRankMemberShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Interest Id" source="interestId" />
        <TextField label="Decision" source="decision" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Arank" source="arank" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
