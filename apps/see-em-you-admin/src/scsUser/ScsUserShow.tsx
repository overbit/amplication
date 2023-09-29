import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ScsUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Andrew Id" source="andrewId" />
        <TextField label="Cmu Guid" source="cmuGuid" />
        <TextField label="Cs Id" source="csId" />
        <TextField label="Ece Id" source="eceId" />
        <TextField label="Id" source="id" />
        <TextField label="Qatar Id" source="qatarId" />
        <TextField label="Users Id" source="usersId" />
      </SimpleShowLayout>
    </Show>
  );
};
