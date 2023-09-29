import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ReviewPositiveFactorShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Positive Factor Id" source="positiveFactorId" />
        <TextField label="Review Id" source="reviewId" />
      </SimpleShowLayout>
    </Show>
  );
};
