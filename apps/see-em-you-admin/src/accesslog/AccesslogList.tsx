import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccesslogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accesslogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
