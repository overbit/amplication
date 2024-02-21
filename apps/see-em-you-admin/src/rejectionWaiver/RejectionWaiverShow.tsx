import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const RejectionWaiverShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Lu Application Programs Id"
          source="luApplicationProgramsId"
        />
        <TextField label="Waived" source="waived" />
        <TextField label="Permitted Program Id" source="permittedProgramId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
