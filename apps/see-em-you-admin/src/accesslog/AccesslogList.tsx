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
      </Datagrid>
    </List>
  );
};
