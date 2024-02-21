import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ScsUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Users Id" source="usersId" />
        <TextField label="Cmu Guid" source="cmuGuid" />
        <TextField label="Cs Id" source="csId" />
        <TextField label="Andrew Id" source="andrewId" />
        <TextField label="Ece Id" source="eceId" />
        <TextField label="Qatar Id" source="qatarId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
