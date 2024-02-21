import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LuProgramsInterestShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Program Id" source="programId" />
        <TextField label="Interest Id" source="interestId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
