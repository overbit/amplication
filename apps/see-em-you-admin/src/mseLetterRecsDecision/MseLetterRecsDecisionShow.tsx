import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MseLetterRecsDecisionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Java" source="java" />
        <TextField label="Discrete" source="discrete" />
        <TextField label="Algorithms" source="algorithms" />
        <TextField label="Data Structures" source="dataStructures" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
