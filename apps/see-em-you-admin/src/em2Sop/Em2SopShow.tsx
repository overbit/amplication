import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const Em2SopShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Additional Info" source="additionalInfo" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Background" source="background" />
        <TextField label="Id" source="id" />
        <TextField label="Objective" source="objective" />
        <TextField label="Research Experience" source="researchExperience" />
        <TextField label="Ta Interest" source="taInterest" />
      </SimpleShowLayout>
    </Show>
  );
};
