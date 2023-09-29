import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const IniSupportingCourseworkShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField
          label="Data Structures Number"
          source="dataStructuresNumber"
        />
        <TextField label="Data Structures Title" source="dataStructuresTitle" />
        <TextField label="Id" source="id" />
        <TextField label="Msit Experience" source="msitExperience" />
        <TextField label="Probability Number" source="probabilityNumber" />
        <TextField label="Probability Title" source="probabilityTitle" />
        <TextField
          label="Programming Description"
          source="programmingDescription"
        />
        <TextField
          label="Programming Description2"
          source="programmingDescription2"
        />
        <TextField label="Statistics Number" source="statisticsNumber" />
        <TextField label="Statistics Title" source="statisticsTitle" />
      </SimpleShowLayout>
    </Show>
  );
};
