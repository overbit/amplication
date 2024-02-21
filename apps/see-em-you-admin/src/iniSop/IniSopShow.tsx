import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const IniSopShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Objective" source="objective" />
        <TextField label="Background" source="background" />
        <TextField label="Research Experience" source="researchExperience" />
        <TextField
          label="Leadership Experience"
          source="leadershipExperience"
        />
        <TextField label="Sfs Interest" source="sfsInterest" />
        <TextField label="Additional Info" source="additionalInfo" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
