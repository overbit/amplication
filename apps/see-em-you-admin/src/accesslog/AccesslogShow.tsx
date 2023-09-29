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
        <TextField label="Activity" source="activity" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Client" source="client" />
        <TextField label="Domain" source="domain" />
        <DateField source="eventtime" label="Eventtime" />
        <TextField label="Id" source="id" />
        <TextField label="Lastsrv" source="lastsrv" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Ra" source="ra" />
        <TextField label="Referer" source="referer" />
        <TextField label="Sa" source="sa" />
        <TextField label="Users Id" source="usersId" />
        <TextField label="Usertype Id" source="usertypeId" />
        <TextField label="Xforward" source="xforward" />
      </SimpleShowLayout>
    </Show>
  );
};
