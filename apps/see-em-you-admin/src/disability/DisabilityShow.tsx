import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DisabilityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Disability Type" source="disabilityType" />
        <TextField label="Has Disability" source="hasDisability" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
