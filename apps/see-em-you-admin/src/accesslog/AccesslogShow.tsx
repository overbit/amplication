import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AccesslogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Users Id" source="usersId" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Usertype Id" source="usertypeId" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Client" source="client" />
        <DateField source="eventtime" label="Eventtime" />
        <TextField label="Activity" source="activity" />
        <TextField label="Domain" source="domain" />
        <TextField label="Referer" source="referer" />
        <TextField label="Xforward" source="xforward" />
        <TextField label="Sa" source="sa" />
        <TextField label="Ra" source="ra" />
        <TextField label="Lastsrv" source="lastsrv" />
      </SimpleShowLayout>
    </Show>
  );
};
