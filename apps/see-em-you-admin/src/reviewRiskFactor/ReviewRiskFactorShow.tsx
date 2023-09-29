import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ReviewRiskFactorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Review Id" source="reviewId" />
        <TextField label="Risk Factor Id" source="riskFactorId" />
      </SimpleShowLayout>
    </Show>
  );
};
