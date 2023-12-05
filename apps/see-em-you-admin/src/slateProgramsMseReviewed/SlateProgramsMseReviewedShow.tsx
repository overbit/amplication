import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SlateProgramsMseReviewedShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="First" source="first" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Mse Program1" source="mseProgram1" />
        <TextField label="Mse Program2" source="mseProgram2" />
        <TextField label="Mse Program3" source="mseProgram3" />
        <TextField label="Prefix" source="prefix" />
      </SimpleShowLayout>
    </Show>
  );
};
