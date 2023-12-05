import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LuApplicationInterestShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="App Program Id" source="appProgramId" />
        <TextField label="Choice" source="choice" />
        <TextField label="Id" source="id" />
        <TextField label="Interest Id" source="interestId" />
      </SimpleShowLayout>
    </Show>
  );
};
