import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MseRiskFactorsDecisionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Experience" source="experience" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Language" source="language" />
        <TextField label="Academic" source="academic" />
        <TextField label="Other" source="other" />
        <TextField label="Other Text" source="otherText" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
