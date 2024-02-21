import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const Em2SopShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Objective" source="objective" />
        <TextField label="Background" source="background" />
        <TextField label="Research Experience" source="researchExperience" />
        <TextField label="Ta Interest" source="taInterest" />
        <TextField label="Additional Info" source="additionalInfo" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
