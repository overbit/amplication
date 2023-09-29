import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LuReviewInterestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <TextField label="Id" source="id" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Review Id" source="reviewId" />
      </SimpleShowLayout>
    </Show>
  );
};
