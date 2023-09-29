import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DecisionRankMemberShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Decision" source="decision" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Drank" source="drank" />
        <TextField label="Id" source="id" />
        <TextField label="Period Id" source="periodId" />
      </SimpleShowLayout>
    </Show>
  );
};
