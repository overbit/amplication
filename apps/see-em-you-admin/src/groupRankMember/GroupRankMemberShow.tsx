import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const GroupRankMemberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Group Id" source="groupId" />
        <TextField label="Round" source="round" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Grank" source="grank" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
