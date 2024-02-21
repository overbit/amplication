import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ReviewPositiveFactorOtherShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Positive Factor Other" source="positiveFactorOther" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
