import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MultiprogramlockoutShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Program Id1" source="programId1" />
        <TextField label="Program Id2" source="programId2" />
      </SimpleShowLayout>
    </Show>
  );
};
