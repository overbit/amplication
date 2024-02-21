import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GroupRankShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Group Id" source="groupId" />
        <TextField label="Round" source="round" />
        <TextField label="Period Id" source="periodId" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Comment" source="comment" />
        <TextField label="Ranking" source="ranking" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
