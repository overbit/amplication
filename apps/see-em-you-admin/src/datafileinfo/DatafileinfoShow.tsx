import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DatafileinfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Type Field" source="typeField" />
        <TextField label="Extension" source="extension" />
        <TextField label="Size" source="size" />
        <TextField label="User Id" source="userId" />
        <TextField label="Section" source="section" />
        <TextField label="Moddate" source="moddate" />
        <TextField label="Userdata" source="userdata" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
