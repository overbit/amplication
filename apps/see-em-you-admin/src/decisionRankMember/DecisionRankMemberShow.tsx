import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DecisionRankMemberShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Decision" source="decision" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Drank" source="drank" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
