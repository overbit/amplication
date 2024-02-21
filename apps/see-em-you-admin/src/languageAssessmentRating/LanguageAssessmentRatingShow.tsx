import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LanguageAssessmentRatingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Value" source="value" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
