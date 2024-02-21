import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DietrichDiversityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Background" source="background" />
        <TextField label="Life Experience" source="lifeExperience" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
