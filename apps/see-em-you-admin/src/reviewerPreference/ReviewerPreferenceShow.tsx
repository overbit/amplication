import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ReviewerPreferenceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="View Mode" source="viewMode" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
