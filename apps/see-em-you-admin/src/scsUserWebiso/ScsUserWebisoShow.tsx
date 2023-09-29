import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ScsUserWebisoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Scs User Id" source="scsUserId" />
        <TextField label="Webiso" source="webiso" />
      </SimpleShowLayout>
    </Show>
  );
};
