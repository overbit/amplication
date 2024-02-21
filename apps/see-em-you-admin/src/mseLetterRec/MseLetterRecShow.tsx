import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MseLetterRecShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField label="Java" source="java" />
        <TextField label="Discrete" source="discrete" />
        <TextField label="Algortihms" source="algortihms" />
        <TextField label="Data Structures" source="dataStructures" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
