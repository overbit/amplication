import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SlateEmail2AwUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Aw Luu User Id" source="awLuuUserId" />
        <TextField label="Id" source="id" />
        <TextField label="Slate Email" source="slateEmail" />
      </SimpleShowLayout>
    </Show>
  );
};
