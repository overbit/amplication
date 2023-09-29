import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SlateAwAppIdShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Aw App Id" source="awAppId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
