import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ApplicantIpedsRaceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Ipeds Race Id" source="ipedsRaceId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
