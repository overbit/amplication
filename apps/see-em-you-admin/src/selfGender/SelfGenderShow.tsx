import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SelfGenderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="User Id" source="userId" />
        <TextField label="Gender Index" source="genderIndex" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
