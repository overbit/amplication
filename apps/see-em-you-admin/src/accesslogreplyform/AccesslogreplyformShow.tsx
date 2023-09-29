import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AccesslogreplyformShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Activity" source="activity" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Client" source="client" />
        <TextField label="Id" source="id" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Users Id" source="usersId" />
        <TextField label="Usertype Id" source="usertypeId" />
      </SimpleShowLayout>
    </Show>
  );
};
