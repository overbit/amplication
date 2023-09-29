import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MseRiskFactorsDecisionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Academic" source="academic" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Experience" source="experience" />
        <TextField label="Id" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="Other" source="other" />
        <TextField label="Other Text" source="otherText" />
        <TextField label="Program Id" source="programId" />
      </SimpleShowLayout>
    </Show>
  );
};
