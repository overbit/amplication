import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LuDegreesApplicationreqShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Degree Id" source="degreeId" />
        <TextField label="Appreq Id" source="appreqId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
