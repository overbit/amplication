import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const IniSopShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Additional Info" source="additionalInfo" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Background" source="background" />
        <TextField label="Id" source="id" />
        <TextField
          label="Leadership Experience"
          source="leadershipExperience"
        />
        <TextField label="Objective" source="objective" />
        <TextField label="Research Experience" source="researchExperience" />
        <TextField label="Sfs Interest" source="sfsInterest" />
      </SimpleShowLayout>
    </Show>
  );
};
