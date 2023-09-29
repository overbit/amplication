import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const IniYearsExperienceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField
          label="Full Time Professional"
          source="fullTimeProfessional"
        />
        <TextField label="Id" source="id" />
        <TextField label="Relevant Industry" source="relevantIndustry" />
      </SimpleShowLayout>
    </Show>
  );
};
